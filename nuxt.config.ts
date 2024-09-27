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
  modules: ["@nuxt/ui", "@nuxt/image"],
  typescript: {
    typeCheck: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});