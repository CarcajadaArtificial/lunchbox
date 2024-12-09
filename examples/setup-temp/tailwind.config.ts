import { type Config } from "tailwindcss";
import { LunchboxTailwind } from "lunchbox";

export default {
  ...LunchboxTailwind,
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "../../src/styles.ts",
    "../../src/atoms.tsx",
  ],
} satisfies Config;
