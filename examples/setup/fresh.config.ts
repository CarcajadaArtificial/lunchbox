import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import lunchbox from "lunchbox/plugin.ts";

export default defineConfig({
  plugins: [tailwind(), lunchbox()],
});
