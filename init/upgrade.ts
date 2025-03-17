/**
 * This module contains the ui updating functionality.
 *
 * @module init
 */
import pkgJson from '../deno.json' with { type: 'json' };
import * as c from '@std/fmt/colors';
import { join } from '@std/path';
import { pipe } from '@gordonb/pipe';
import { collectFiles, initFiles } from './utils.ts';

/**
 * This function updates all the Lunchbox UI components rewriting them with the new version's code.
 */
async function upgrade() {
  pipe(
    `Upgrading Lunchbox components to v${pkgJson.version}`,
    c.brightGreen,
    c.bold,
    console.log,
  );

  await initFiles(
    join(Deno.cwd(), 'components/lunchbox'),
    1,
    await collectFiles('ui/', ['icons']),
  );

  pipe('Finished upgrading Lunchbox ui components', c.italic, console.log);
}

upgrade();
