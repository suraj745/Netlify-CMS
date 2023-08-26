import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import { vitePluginMdxToHTML } from "vite-plugin-mdx-to-html";

export default defineConfig({
  optimizeDeps: {
    include: ["jquery"],
  },
  plugins: [mdx(), vitePluginMdxToHTML()],
  build: {
    rollupOptions: {
      input: {
        index: "main.js", // Common entry point for shared modules
        homePage: "index.html", // Entry point for index.html
        aboutPage: "/pages/about.html", // Entry point for about.html
        blogPage: "/pages/blog.html",
        contactPage: "/pages/contact.html",
        galleryPage: "/pages/gallery.html",
        leadershipPage: "/pages/leadership.html",
        mediaPage: "/pages/media_coverage.html",
      },
    },
  },
});
