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
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],

  typescript: {
    typeCheck: true,
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "th", iso: "th-TH", name: "ไทย", file: "th.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
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
