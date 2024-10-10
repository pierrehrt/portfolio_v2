// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],

  typescript: {
    typeCheck: true,
  },

  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
      { code: "th", name: "ไทย", iso: "th-TH", file: "th.json" },
      { code: "fr", name: "Français", iso: "fr-FR", file: "fr.json" },
    ],
    strategy: "no_prefix",
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2024-09-28",

  app: {
    head: {
      titleTemplate: "Full Stack Software Developer | Pierre Huret",
      meta: [
        {
          name: "description",
          content:
            "I'm Pierre, fullstack developer specializing in creating scalable, efficient, and user-friendly digital solutions. With experience in software development, I offer expertise in developing and managing entire project, including front and backend on web and mobile.",
        },
        { name: "author", content: "Pierre Huret" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
    },
  },
});
