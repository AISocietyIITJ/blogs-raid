// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://aisocietyiitj.github.io/blogs-raid/",
  base: "/blogs-raid",
  integrations: [mdx({
    remarkPlugins: [remarkMath,remarkGfm],
    rehypePlugins: [rehypeKatex, rehypeMdxImportMedia],
  }), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
