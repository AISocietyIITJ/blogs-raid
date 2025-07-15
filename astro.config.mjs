// // @ts-check
// import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";

// import tailwindcss from "@tailwindcss/vite";

// // https://astro.build/config
// export default defineConfig({
//   site: "https://aisocietyiitj.github.io/blogs-raid/",
//   base: "/blogs-raid",
//   integrations: [mdx(), sitemap()],

//   vite: {
//     plugins: [tailwindcss()],
//   },
// });
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://aisocietyiitj.github.io/blogs-raid/",
  base: "/blogs-raid",
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
