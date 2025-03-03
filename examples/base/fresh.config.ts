import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { fresh_lunchbox } from "@lunchbox/plugin";

export default defineConfig({
  plugins: [tailwind(), fresh_lunchbox],
});
