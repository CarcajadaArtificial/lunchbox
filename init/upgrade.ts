/**
 * This module contains the ui updating functionality.
 *
 * @module init
 */
import pkgJson from '../deno.json' with { type: 'json' };
import initJson from './init.gen.json' with { type: 'json' };
import * as c from '@std/fmt/colors';
import { pipe } from '@gordonb/pipe';
import { initFromUrl } from './utils.ts';

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

  await Promise.all(
    initJson.ui.map((url) =>
      initFromUrl(url, 'main/ui/', 'components/lunchbox')
    ),
  );

  pipe('Finished upgrading Lunchbox ui components', c.italic, console.log);
}

upgrade();
