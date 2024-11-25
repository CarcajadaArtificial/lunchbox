import { type Config } from "tailwindcss";

export default {
  theme: {
    fontFamily: {
      mono: ["Fira Code", "ui-monospace", "monospace"],
      base: ["Figtree", "system-ui", "ui-sans-serif", "sans-serif"],
      heading: ["Libre Caslon Text", "ui-serif", "serif"],
    },
    colors: {
      page: {
        DEFAULT: "#eee6f2",
        50: "#eee6f280",
      },
      panel: {
        DEFAULT: "#ffffff",
      },
      d: {
        page: {
          DEFAULT: "#3d3640",
          50: "#3d364080",
        },
        panel: {
          DEFAULT: "#241f26",
        },
      },
    },
    screens: {
      md: "40em",
      lg: "80em",
    },
    extend: {
      spacing: {
        "eighth": "0.125rem",
        "quarter": "0.25rem",
        "three-eights": "0.375rem",
        "third": "0.3333333333rem",
        "half": "0.5rem",
        "five-eights": "0.625rem",
        "two-thirds": "0.6666666666rem",
        "three-quarters": "0.75rem",
        "seven-eights": "0.875rem",
        "single": "1rem",
        "one-and-half": "1.5rem",
        "double": "2rem",
        "triple": "3rem",
        "quadruple": "4rem",
        "fifteen": "15rem",
      },
      gridTemplateColumns: {
        lg: "repeat(12, minmax(4.5rem, 4.5rem))",
      },
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "../../src/styles.ts",
  ],
} satisfies Config;
