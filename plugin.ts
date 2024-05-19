import { Plugin } from '$fresh/server.ts';
import { ResinCssEmitter } from './deps.ts';
import { ensureDir, walk } from 'https://deno.land/std@0.98.0/fs/mod.ts';
import { join } from 'https://deno.land/std@0.98.0/path/mod.ts';

async function copyFilesRecursively(from: string, to: string): Promise<void> {
  await ensureDir(to);

  for await (const entry of walk(from, { includeDirs: true })) {
    const relativePath = entry.path.substring(from.length);
    const targetPath = join(to, relativePath);

    if (entry.isDirectory) {
      await ensureDir(targetPath);
    } else if (entry.isFile) {
      await Deno.copyFile(entry.path, targetPath);
    }
  }
}

const styles = await Deno.readTextFile(
  new URL('./static/styles.css', import.meta.url).pathname,
);

export default function lunchboxPlugin(): Plugin {
  return {
    name: 'lunchbox',
    buildStart: (ctx) =>
      copyFilesRecursively(
        new URL('./static/fonts/', import.meta.url).pathname,
        ctx.staticDir + '/fonts/',
      ),
    render: (ctx) => {
      ctx.render();

      return {
        styles: [
          {
            id: 'lunchbox-css-reset',
            cssText: styles,
          },
          {
            id: 'lunchbox-resin-emitter',
            cssText: ResinCssEmitter({})!.props.children,
          },
        ],
      };
    },
  };
}
