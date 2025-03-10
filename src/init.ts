//   ___      _ _
//  |_ _|_ _ (_) |_
//   | || ' \| |  _|
//  |___|_||_|_|\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the project initialization functionality.
 * @module
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
/**
 * Initializes a new Lunchbox UI project.
 *
 * @param cwd - The current working directory.
 * @param input - Command line arguments.
 * @param tty - TTY interface for user interaction.
 */
export async function init(
  cwd = Deno.cwd(),
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

  // Write root configuration files
  await writeFile('.gitignore', gen.EXAMPLES_INIT_);
  await writeFile('deno.json', gen.EXAMPLES_INIT_DENO);
  await writeFile('dev.ts', gen.EXAMPLES_INIT_DEV);
  await writeFile('main.ts', gen.EXAMPLES_INIT_MAIN);
  await writeFile('tailwind.config.ts', gen.EXAMPLES_INIT_TAILWIND);
  await writeFile('utils.ts', gen.EXAMPLES_INIT_UTILS);

  // Write routes
  await writeFile('routes/_app.tsx', gen.EXAMPLES_INIT_ROUTES__APP);
  await writeFile('routes/index.tsx', gen.EXAMPLES_INIT_ROUTES_INDEX);

  // Write static files
  await writeFile('static/styles.css', gen.EXAMPLES_INIT_STATIC_STYLES);

  // Write component files
  await writeFile('components/lunchbox/atoms.tsx', gen.SRC_ATOMS);
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
      '',
    );
  }
  tty.log(
    'Run %cdeno task dev%c to start the development server.',
    'color: cyan',
    '',
  );
  tty.log();
  tty.log(
    '%cHappy coding! 🎁',
    'color: gray',
  );
}

init();
