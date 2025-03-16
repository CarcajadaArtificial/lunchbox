//   ___      _ _
//  |_ _|_ _ (_) |_
//   | || ' \| |  _|
//  |___|_||_|_|\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the project initialization functionality.
 *
 * @module init
 */
import * as colors from '@std/fmt/colors';
import * as path from '@std/path';

// =====================================================================================================
/**
 * Enum representing the different steps in the project initialization process.
 */
export const enum InitStep {
  /** Step for getting the project name from user. */
  ProjectName = 'ProjectName',
  /** Step for confirming whether to force overwrite existing files. */
  Force = 'Force',
}

// =====================================================================================================
/**
 * Interface representing a mock TTY (Teletypewriter) for testing purposes.
 */
export interface MockTTY {
  /** Function to prompt the user for input. */
  prompt(step: InitStep, message?: string, _default?: string): string | null;
  /** Function to confirm user's input. */
  confirm(step: InitStep, message?: string): boolean;
  /** Function to log messages. */
  log(...args: unknown[]): void;
  /** Function to log error messages. */
  logError(...args: unknown[]): void;
}

// =====================================================================================================
/**
 * MockTTY implementation for testing purposes.
 */
const realTTY: MockTTY = {
  prompt(_step, message, _default) {
    return prompt(message, _default);
  },
  confirm(_step, message) {
    return confirm(message);
  },
  log(...args) {
    console.log(...args);
  },
  logError(...args) {
    console.error(...args);
  },
};

// =====================================================================================================
interface FileEntry {
  path: string;
  content: Uint8Array<ArrayBuffer>;
}

export async function collectFiles(
  dir: string,
  except: string[] = [],
): Promise<FileEntry[]> {
  const files: FileEntry[] = [];

  for await (const entry of Deno.readDir(dir)) {
    const entityDirectory = path.join(dir, entry.name);
    if (except.includes(entry.name)) continue;
    else if (entry.isDirectory) {
      files.push(...(await collectFiles(entityDirectory, except)));
    } else {
      files.push({
        path: entityDirectory,
        content: await Deno.readFile(entityDirectory),
      });
    }
  }
  return files;
}

export async function initFiles(
  targetDir: string,
  spliceStart: number,
  files: FileEntry[],
) {
  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(
        targetDir,
        ...file.path.split('/').splice(spliceStart),
      );
      await Deno.mkdir(path.dirname(filePath), { recursive: true });
      await Deno.writeFile(filePath, file.content);
    }),
  );
}

// =====================================================================================================
/**
 * ```txt
 * .
 * ├── components/
 * │   ├── lunchbox/
 * │       └── [[ Copy of `./ui/` ]]
 * │
 * ├── islands/
 * │   ├── lunchbox/
 * │       └── [[ Copy of `./ui/organisms` ]]
 * │
 * ├── static/
 * │   └── [[ Copy of `./static/` ]]
 * │
 * └── [[ Copy of `./init/examples/init` ]]
 * ```
 *
 * @todo [DEV] There is a discrepancy between `/examples/init/deno.json` and the `./deno.json` of the
 *       initialized project. Both must be different to remove importing error messages. To solve
 *       this, when generating the initialization code strings in `init.gen.ts`, ignore the
 *       `/examples/init/deno.json` file in favor of a `/src/init.json`. The `init.json` file will
 *       contain the generated initialization code, while `/examples/init/deno.json` will make
 *       imports work locally.
 */
export async function init(
  input: string[] = [],
  tty: MockTTY = realTTY,
): Promise<void> {
  tty.log(
    colors.bgRgb8(
      colors.rgb8(' 🍱 @lunchbox/ui ', 0),
      121,
    ),
  );

  let unresolvedDirectory = input[0];
  if (!unresolvedDirectory) {
    const userInput = tty.prompt(
      InitStep.ProjectName,
      'Project Name:',
      'lunchbox-project',
    );
    if (!userInput) {
      tty.logError('Project name is required');
      return;
    }
    unresolvedDirectory = userInput!;
  }

  await initFiles(
    unresolvedDirectory,
    3,
    await collectFiles('init/examples/init', ['deno.lock']),
  );
  await initFiles(
    path.join(unresolvedDirectory, 'components/lunchbox'),
    1,
    await collectFiles('ui/', ['icons']),
  );
  await initFiles(
    path.join(unresolvedDirectory, 'static'),
    1,
    await collectFiles('static/', []),
  );

  // Write success message
  tty.log('\n%cProject initialized!\n', 'color: green; font-weight: bold');
  if (unresolvedDirectory !== '.') {
    tty.log(
      `Enter your project directory using %ccd ${unresolvedDirectory}%c.`,
      'color: cyan',
    );
  }
  tty.log(
    'Run %cdeno task dev%c to start the development server.',
    'color: cyan',
  );
  tty.log();
  tty.log(
    '%cHappy coding! 🎁',
    'color: gray',
  );
}

init();
