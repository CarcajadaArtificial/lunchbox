/**
 * This module contains scripts that can can be run with the `deno task` command.
 *
 * @module tasks
 */
import { createFetchSources, removeFiles } from './init/utils.ts';

/**
 * This is the CLI entry point for `deno task` commands. It is built to be an anonymous immediately
 * invoked function expression (IIFE) to avoid polluting the namespace.
 */
(async () => {
  const [command, ..._args] = Deno.args;

  switch (command) {
    case 'init-clean': {
      await removeFiles(
        '/init/base/.vscode',
        '/init/base/node_modules',
        '/init/base/README.md',
        '/init/base/static/logo.svg',
        '/init/base/static/favicon.ico',
        '/init/base/routes/api',
        '/init/base/components',
        '/init/base/islands',
      );
      break;
    }

    case 'init-map': {
      await Deno.writeTextFile(
        'init/init.gen.json',
        JSON.stringify({
          base: await createFetchSources(
            'https://github.com/CarcajadaArtificial/lunchbox/blob/main/init/base/',
            'init/base/',
            'deno.lock',
          ),
          ui: await createFetchSources(
            'https://github.com/CarcajadaArtificial/lunchbox/blob/main/ui/',
            'ui/',
            'icons',
          ),
          static: await createFetchSources(
            'https://github.com/CarcajadaArtificial/lunchbox/blob/main/static/',
            'static/',
          ),
        }),
      );
      break;
    }

    default:
      console.error(
        'Unknown task.',
      );
      Deno.exit(1);
  }
})();
