import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "suraj745/Netlify-CMS",
      branch: "main",
    },
    media_folder: "/dist/images",
    public_folder: "/dist/public",
    collections: [
      {
        name: "home",
        label: "Home Page",
        folder: "Home/home-banner",
        create: true,
        fields: [
          { name: "heading", label: "heading", widget: "string" },
          { name: "para", label: "para", widget: "markdown" },
        ],
      },
    ],
  },
});
