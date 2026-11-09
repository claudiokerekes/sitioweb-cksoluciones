import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cksoluciones.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          changefreq: 'monthly',
          priority: item.url === 'https://cksoluciones.com/' ? 1.0 : 0.8,
          lastmod: new Date().toISOString().slice(0, 10),
        };
      },
    }),
  ],
});
