import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

export default defineConfig({
  integrations: [svelte(), tailwind(), sitemap(), partytown(), image()],
  // site: 'https://cloudsen12PLUS.github.io'
  site: 'https://cloudsen12.github.io'
});
