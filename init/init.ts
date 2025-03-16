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
import * as c from '@std/fmt/colors';
import * as path from '@std/path';
import { pipe } from '@gordonb/pipe';

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
export async function init(): Promise<void> {
  console.log();
  pipe(
    ' 🍱 @lunchbox/ui ',
    c.bgBrightGreen,
    c.black,
    c.bold,
    console.log,
  );
  console.log();
  pipe(
    'Hello ( ´ ω ` )ノﾞ',
    c.italic,
    c.brightGreen,
    console.log,
  );

  console.log(`
You are about to create a project with:
- Deno (Typescript)
- Fresh + Preact (Web framework)
- Tailwind + TypographyPlugin (Styles)
- Lunchbox (UI Components)
- Deno GFM (Markdown support)
    `);
  // - Zod (Schema validation)
  // - Teclas (Keyboard handling)

  const projectName = prompt(
    pipe(
      'Project Name:',
      c.brightGreen,
      c.italic,
    ),
    'fresh-lunchbox',
  );
  if (!projectName) {
    console.error('Project name is required');
    return;
  }

  await initFiles(
    projectName,
    3,
    await collectFiles('init/examples/init', ['deno.lock']),
  );
  await initFiles(
    path.join(projectName, 'components/lunchbox'),
    1,
    await collectFiles('ui/', ['icons']),
  );
  await initFiles(
    path.join(projectName, 'static'),
    1,
    await collectFiles('static/', []),
  );

  // Write success message
  console.log();
  console.log(
    'Thank you and enjoy!',
  );
  console.log();
}

init();
