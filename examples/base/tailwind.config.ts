import { type Config } from "tailwindcss";
import { LunchboxTailwind } from "lunchbox";
import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";
// import formsPlugin from "npm:/@tailwindcss/forms@0.5.9";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "../../src/styles.ts",
    "../../src/atoms.tsx",
  ],
  plugins: [
    LunchboxTailwind,
    typographyPlugin,
    // formsPlugin,
  ],
} satisfies Config;
