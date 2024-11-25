import { Plugin, PluginRenderContext } from '$fresh/server.ts';

export function lunchbox(): Plugin {
  return {
    name: 'lunchbox',
    render: (ctx: PluginRenderContext) => {
      ctx.render();

      return {
        links: [
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/styles.css',
          },
          // Preload Figtree fonts
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-700.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-Italic.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/Figtree/Figtree-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          // Preload FiraCode fonts
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/FiraCode/FiraCode-Bold.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/FiraCode/FiraCode-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          // Preload Libre Caslon Text fonts
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-700.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-Italic.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          {
            rel: 'preload',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/LibreCaslonText/Libre-Caslon-Text-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossorigin: 'anonymous',
          },
          // Load the fonts.css for font definitions
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox/static/fonts/fonts.css',
          },
        ],
      };
    },
  };
}
