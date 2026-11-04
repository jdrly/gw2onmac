// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fonts from the design (docs/gw2onmac.pen), all SIL OFL, downloaded at build time and served
// from this site: Cinzel for the wordmark, buttons and version numbers, Marcellus for headings,
// Alegreya Sans for text.
export default defineConfig({
  site: 'https://gw2onmac.com',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cinzel',
      cssVariable: '--font-cinzel',
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Marcellus',
      cssVariable: '--font-marcellus',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Alegreya Sans',
      cssVariable: '--font-alegreya-sans',
      weights: [400, 500, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
