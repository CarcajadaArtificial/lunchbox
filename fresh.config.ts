import { defineConfig } from '$fresh/server.ts';
import twindPlugin from '$fresh/plugins/twind.ts';
import twindConfig from './twind.config.ts';
import lunchboxPlugin from './plugin.ts';

export default defineConfig({
  plugins: [
    twindPlugin(twindConfig),
    lunchboxPlugin(),
  ],
});
