import { type Config } from "tailwindcss";
import { LunchboxTailwind } from "lunchbox";
import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "../../src/atoms.tsx",
  ],
  plugins: [
    LunchboxTailwind,
    typographyPlugin,
  ],
} satisfies Config;
