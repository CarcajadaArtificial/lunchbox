import { Plugin } from '$fresh/server.ts';
import { ResinCssEmitter } from './deps.ts';
// import { ensureDir, walk } from 'https://deno.land/std@0.98.0/fs/mod.ts';
// import { join } from 'https://deno.land/std@0.98.0/path/mod.ts';

export default function lunchboxPlugin(): Plugin {
  return {
    name: 'lunchbox',
    render: (ctx) => {
      ctx.render();

      return {
        styles: [
          {
            id: 'resin-css-page-css-tag',
            cssText: ResinCssEmitter({})!.props.children,
          },
        ],
        head: [
          // Link to your main CSS file
          `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/styles.css">`,

          // Preload Figtree fonts
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-700.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-Italic.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,

          // Preload FiraCode fonts
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/FiraCode/FiraCode-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/FiraCode/FiraCode-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,

          // Preload Libre Caslon Text fonts
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-700.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-Italic.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,
          `<link rel="preload" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">`,

          // Load fonts.css for any additional font-related styles
          `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/fonts.css">`,
        ],
      };
    },
  };
}
