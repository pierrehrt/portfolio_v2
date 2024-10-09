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
});
