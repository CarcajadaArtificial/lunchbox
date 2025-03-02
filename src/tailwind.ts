//   _____     _ _        _         _
//  |_   _|_ _(_) |_ __ _(_)_ _  __| |
//    | |/ _` | | \ V  V / | ' \/ _` |
//    |_|\__,_|_|_|\_/\_/|_|_||_\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the tailwind plugin for the library.
 *
 * @module
 */

import plugin from 'npm:/tailwindcss@3.4.1/plugin.js';

const twPlugin: ReturnType<typeof plugin> = plugin(
  function () {},
  {
    theme: {
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'monospace'],
        base: ['Figtree', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        heading: ['Libre Caslon Text', 'ui-serif', 'serif'],
      },
      colors: {
        neutral: {
          DEFAULT: '#3d3640',
          25: '#3d364040',
          10: '#3d36401a',
        },
        brand: {
          DEFAULT: '#c8d9db',
          lc: {
            DEFAULT: '#089969',
            60: '#08996999',
            45: '#08996973',
            30: '#0899694d',
          },
          hc: {
            DEFAULT: '#2b584e',
            25: '#2b584e40',
            10: '#2b584e1a',
          },
        },
        error: {
          lc: {
            DEFAULT: '#dbc4c5',
            50: '#dbc4c580',
          },
          hc: '#66050d',
        },
        page: {
          DEFAULT: '#eee6f2',
          50: '#eee6f280',
        },
        panel: {
          DEFAULT: '#ffffff',
          50: '#ffffff80',
          35: '#ffffff59',
          15: '#ffffff26',
        },
        d: {
          neutral: {
            DEFAULT: '#eee6f2',
            25: '#eee6f240',
            10: '#eee6f21a',
          },
          brand: {
            lc: {
              DEFAULT: '#344747',
              60: '#34474799',
              45: '#34474773',
              30: '#3447474d',
            },
            hc: {
              DEFAULT: '#7dc0af',
              25: '#7dc0af40',
              10: '#7dc0af1a',
            },
          },
          error: {
            lc: {
              DEFAULT: '#573c4d',
              50: '#573c4d80',
            },
            hc: '#fa96c8',
          },
          page: {
            DEFAULT: '#3d3640',
            50: '#3d364080',
          },
          panel: {
            DEFAULT: '#241f26',
            50: '#241f2680',
            35: '#241f2659',
            15: '#241f2626',
          },
        },
      },
      screens: {
        md: '40em',
        lg: '80em',
      },
      extend: {
        spacing: {
          'eighth': '0.125rem',
          'quarter': '0.25rem',
          'three-eights': '0.375rem',
          'third': '0.3333333333rem',
          'half': '0.5rem',
          'five-eights': '0.625rem',
          'two-thirds': '0.6666666666rem',
          'three-quarters': '0.75rem',
          'seven-eights': '0.875rem',
          'single': '1rem',
          'one-and-half': '1.5rem',
          'double': '2rem',
          'triple': '3rem',
          'quadruple': '4rem',
          'fifteen': '15rem',
          '1/8': '0.125em',
          '1/4': '0.25em',
          '3/8': '0.375em',
          '1/3': '0.3333333333em',
          '1/2': '0.5em',
          '5/8': '0.625em',
          '2/3': '0.6666666666em',
          '3/4': '0.75em',
          '7/8': '0.875em',
          '1/1': '1em',
          '3/2': '1.5em',
          '2/1': '2em',
          '3/1': '3em',
          '4/1': '4em',
          '15/1': '15em',
          'banner': '90dvh',
        },
        gridTemplateColumns: {
          md: 'repeat(12, minmax(4.5rem, 4.5rem))',
          lg: 'repeat(12, 1fr)',
        },
        gridColumn: {
          full: 'span 12 / span 12',
          xl: 'span 10 / span 10',
          lg: 'span 8 / span 8',
          md: 'span 6 / span 6',
          sm: 'span 4 / span 4',
          xs: 'span 2 / span 2',
          'h-full': 'span 6 / span 6',
          'h-xl': 'span 5 / span 5',
          'h-lg': 'span 4 / span 4',
          'h-md': 'span 3 / span 3',
          'h-sm': 'span 2 / span 2',
          'h-xs': 'span 1 / span 1',
        },
        fontSize: {
          small: ['0.64rem', '1.1rem'],
          base: ['1rem', '1.5rem'],
          subhead: ['1.5625rem', '3rem'],
          head: ['2.44140625rem', '3rem'],
          title: ['3.0517578125rem', '4.5rem'],
          display: ['3.8146972656rem', '4.5rem'],
        },
        typography: {
          DEFAULT: {
            css: {
              // neutral
              '--tw-prose-body': '#3d3640',
              '--tw-prose-lead': '#3d3640',
              '--tw-prose-links': '#3d3640',
              '--tw-prose-bold': '#3d3640',
              '--tw-prose-counters': '#3d3640',
              '--tw-prose-bullets': '#3d3640',
              '--tw-prose-quotes': '#3d3640',
              '--tw-prose-pre-code': '#3d3640',
              '--tw-prose-invert-body': '#eee6f2',
              '--tw-prose-invert-lead': '#eee6f2',
              '--tw-prose-invert-links': '#eee6f2',
              '--tw-prose-invert-bold': '#eee6f2',
              '--tw-prose-invert-counters': '#eee6f2',
              '--tw-prose-invert-bullets': '#eee6f2',
              '--tw-prose-invert-quotes': '#eee6f2',
              '--tw-prose-invert-pre-code': '#eee6f2',

              // neutral-25
              '--tw-prose-td-borders': '#3d36401a',
              '--tw-prose-invert-td-borders': '#eee6f21a',

              // brand-hc
              '--tw-prose-headings': '#2b584e',
              '--tw-prose-hr': '#2b584e',
              '--tw-prose-quote-borders': '#2b584e',
              '--tw-prose-captions': '#2b584e',
              '--tw-prose-invert-headings': '#7dc0af',
              '--tw-prose-invert-hr': '#7dc0af',
              '--tw-prose-invert-quote-borders': '#7dc0af',
              '--tw-prose-invert-captions': '#7dc0af',

              // brand-lc
              '--tw-prose-th-borders': '#c8d9db',
              '--tw-prose-invert-th-borders': '#344747',

              // panel-50
              '--tw-prose-pre-bg': '#ffffff80',
              '--tw-prose-invert-pre-bg': '#241f2680',
            },
          },
        },
      },
    },
  },
);

export default twPlugin;
