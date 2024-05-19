import { defineConfig } from '$fresh/server.ts';
import tailwind from '$fresh/plugins/tailwind.ts';
// import stories from 'https://deno.land/x/fresh_stories@0.0.13/stories-plugin.ts';
import lunchbox from '../plugin.ts';

export default defineConfig({
  plugins: [tailwind(), lunchbox()],
});
