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
import * as gen from './init.gen.ts';

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
/**
 * Writes a project file to the given directory.
 * @param projectDir - The directory to write the file to.
 * @param pathname - The pathname of the file to write.
 * @param content - The content to write to the file.
 */
async function writeProjectFile(
  projectDir: string,
  pathname: string,
  content: string | Uint8Array | Record<string, unknown>,
) {
  const filePath = path.join(projectDir, ...pathname.split('/'));
  await Deno.mkdir(path.dirname(filePath), { recursive: true });

  if (typeof content === 'string') {
    await Deno.writeTextFile(filePath, content + '\n');
  } else if (content instanceof Uint8Array) {
    await Deno.writeFile(filePath, content);
  } else {
    await Deno.writeTextFile(
      filePath,
      JSON.stringify(content, null, 2) + '\n',
    );
  }
}

// =====================================================================================================
interface FileEntry {
  path: string;
  content: string;
}

export async function collectFiles(
  dir: string,
  except: string[] = [],
): Promise<FileEntry[]> {
  const files: FileEntry[] = [];

  for await (const entry of Deno.readDir(dir)) {
    const entityDirectory = path.join(dir, entry.name);
    if (entry.isDirectory) await collectFiles(entityDirectory);
    else if (except.includes(entry.name)) continue;
    else {
      files.push({
        path: entityDirectory,
        content: (await Deno.readTextFile(entityDirectory))
          .replace(/\\/g, '\\\\')
          .replace(/\${/g, '\\${')
          .replace(/`/g, '\\`'),
      });
    }
  }

  return files;
}

export async function initFiles(targetDir: string, files: FileEntry[]) {
  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(
        targetDir,
        ...file.path.split('/').splice(2),
      );
      await Deno.mkdir(path.dirname(filePath), { recursive: true });
      await Deno.writeTextFile(filePath, file.content);
    }),
  );
}

// =====================================================================================================
/**
 * ```txt
 * .
 * ├── components/
 * │   ├── lunchbox/
 * │   │   ├── atoms/
 * │   │   │   ├── _mod.ts
 * │   │   │   └── ...atoms.tsx
 * │   │   ├── molecules/
 * │   │   │   ├── _mod.ts
 * │   │   │   └── ...molecules.tsx
 * │   │   ├── particles/
 * │   │   │   ├── _mod.ts
 * │   │   │   └── ...particles.ts
 * │   │   └── _mod.ts
 * │   └── {Other Components}.tsx
 * │
 * ├── routes/
 * │   ├── _app.tsx
 * │   └── index.tsx
 * │
 * ├── static/
 * │   ├── Figtree/
 * │   │   ├── Figtree-Bold.woff2
 * │   │   ├── Figtree-Regular.woff2
 * │   │   └── Figtree-Italic.woff2
 * │   ├── FiraCode/
 * │   │   ├── FiraCode-Bold.woff2
 * │   │   ├── FiraCode-Regular.woff2
 * │   ├── LibreCaslonText/
 * │   │   ├── LibreCaslonText-Bold.woff2
 * │   │   ├── LibreCaslonText-Regular.woff2
 * │   │   └── LibreCaslonText-Italic.woff2
 * │   ├── fonts.css
 * │   └── styles.css
 * │
 * ├── .gitignore
 * ├── deno.json
 * ├── dev.ts
 * ├── main.ts
 * ├── tailwind.config.ts
 * └── utils.ts
 * ```
 *
 * @todo There is a discrepancy between `/examples/init/deno.json` and the `./deno.json` of the
 *       initialized project. Both must be different to remove importing error messages. To solve
 *       this, when generating the initialization code strings in `init.gen.ts`, ignore the
 *       `/examples/init/deno.json` file in favor of a `/src/init.json`. The `init.json` file will
 *       contain the generated initialization code, while `/examples/init/deno.json` will make
 *       imports work locally.
 */
export async function init(
  cwd: string = Deno.cwd(),
  input: string[] = [],
  tty: MockTTY = realTTY,
): Promise<void> {
  tty.log();
  tty.log(
    colors.bgRgb8(
      colors.rgb8(' 🍱 @lunchbox/ui ', 0),
      121,
    ),
  );
  tty.log();

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

  const projectDir = path.resolve(cwd, unresolvedDirectory);

  try {
    const dir = [...Deno.readDirSync(projectDir)];
    const isEmpty = dir.length === 0 ||
      (dir.length === 1 && dir[0].name === '.git');
    if (
      !isEmpty &&
      !tty.confirm(InitStep.Force, 'Directory is not empty. Continue anyway?')
    ) {
      console.error(tty, 'Directory is not empty.');
    }
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
  }

  const writeFile = async (
    pathname: string,
    content: string | Uint8Array | Record<string, unknown>,
  ) => {
    await writeProjectFile(projectDir, pathname, content);
  };

  // Download font files from CDN
  const fonts = [
    'Figtree/Figtree-Bold.woff2',
    'Figtree/Figtree-Regular.woff2',
    'Figtree/Figtree-Italic.woff2',
    'FiraCode/FiraCode-Bold.woff2',
    'FiraCode/FiraCode-Regular.woff2',
    'LibreCaslonText/LibreCaslonText-Bold.woff2',
    'LibreCaslonText/LibreCaslonText-Regular.woff2',
    'LibreCaslonText/LibreCaslonText-Italic.woff2',
  ];

  /**
   * @todo Download favicon.ico from CDN.
   */

  for (const font of fonts) {
    try {
      const url =
        `https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/${font}`;
      const res = await fetch(url);
      const buf = await res.arrayBuffer();
      await writeFile(`static/${font}`, new Uint8Array(buf));
    } catch {
      console.error(`Failed to download font: ${font}`);
    }
  }

  // Write root configuration files
  await writeFile(
    '.gitignore',
    gen.EXAMPLES_INIT_,
  );
  await writeFile(
    'deno.json',
    gen.EXAMPLES_INIT_DENO,
  );
  await writeFile(
    'dev.ts',
    gen.EXAMPLES_INIT_DEV,
  );
  await writeFile(
    'main.ts',
    gen.EXAMPLES_INIT_MAIN,
  );
  await writeFile(
    'tailwind.config.ts',
    gen.EXAMPLES_INIT_TAILWIND,
  );
  await writeFile(
    'utils.ts',
    gen.EXAMPLES_INIT_UTILS,
  );

  // Write routes
  await writeFile(
    'routes/_app.tsx',
    gen.EXAMPLES_INIT_ROUTES__APP,
  );
  await writeFile(
    'routes/index.tsx',
    gen.EXAMPLES_INIT_ROUTES_INDEX,
  );

  // Write static files
  await writeFile(
    'static/styles.css',
    gen.STATIC_STYLES,
  );

  // Write component files
  await writeFile(
    'components/lunchbox/atoms.tsx',
    gen.SRC_ATOMS,
  );
  await writeFile(
    'components/lunchbox/particles.ts',
    gen.SRC_PARTICLES,
  );
  await writeFile(
    'components/lunchbox/molecules.ts',
    gen.SRC_MOLECULES,
  );
  await writeFile(
    'components/lunchbox/molecules/Accordion.tsx',
    gen.SRC_MOLECULES_ACCORDION,
  );
  await writeFile(
    'components/lunchbox/molecules/FieldsetCheck.tsx',
    gen.SRC_MOLECULES_FIELDSETCHECK,
  );
  await writeFile(
    'components/lunchbox/molecules/FieldsetRadio.tsx',
    gen.SRC_MOLECULES_FIELDSETRADIO,
  );
  await writeFile(
    'components/lunchbox/molecules/InputCheckCombo.tsx',
    gen.SRC_MOLECULES_INPUTCHECKCOMBO,
  );
  await writeFile(
    'components/lunchbox/molecules/InputFieldCombo.tsx',
    gen.SRC_MOLECULES_INPUTFIELDCOMBO,
  );
  await writeFile(
    'components/lunchbox/molecules/InputRadioCombo.tsx',
    gen.SRC_MOLECULES_INPUTRADIOCOMBO,
  );
  await writeFile(
    'components/lunchbox/molecules/InputSelectCombo.tsx',
    gen.SRC_MOLECULES_INPUTSELECTCOMBO,
  );
  await writeFile(
    'components/lunchbox/molecules/InputTextareaCombo.tsx',
    gen.SRC_MOLECULES_INPUTTEXTAREACOMBO,
  );
  await writeFile(
    'components/lunchbox/molecules/Markdown.tsx',
    gen.SRC_MOLECULES_MARKDOWN,
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
