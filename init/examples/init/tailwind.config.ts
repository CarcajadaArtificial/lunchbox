import type { Config } from "tailwindcss";
import { lunchboxPlugin } from "@lunchbox/ui";
import typographyPlugin from "npm:/@tailwindcss/typography@0.5.15";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [lunchboxPlugin(), typographyPlugin],
} satisfies Config;
