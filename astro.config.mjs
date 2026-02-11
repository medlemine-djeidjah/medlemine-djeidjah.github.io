import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://medlemine-djeidjah.github.io',
  integrations: [tailwind()],
});
