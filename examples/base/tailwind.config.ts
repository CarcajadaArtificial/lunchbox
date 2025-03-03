import { type Config } from "tailwindcss";
import { tailwind_lunchbox } from "@lunchbox/plugin";
import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    "../../src/atoms.tsx",
  ],
  plugins: [
    tailwind_lunchbox,
    typographyPlugin,
  ],
} satisfies Config;
