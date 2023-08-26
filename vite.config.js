export default {
  optimizeDeps: {
    include: ["jquery"],
  },
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
        adminPage: "/public/admin/index.html",
      },
    },
  },
};
