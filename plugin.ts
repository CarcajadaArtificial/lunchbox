import { Plugin } from '$fresh/server.ts';
import { ResinCssEmitter } from './deps.ts';

const styles = await Deno.readTextFile(
  new URL('./static/styles.css', import.meta.url).pathname,
);

export default function lunchboxPlugin(): Plugin {
  return {
    name: 'lunchbox',
    islands: {
      baseLocation: import.meta.url,
      paths: [
        // './islands/plugin/Chiplist.tsx',
      ],
    },
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
