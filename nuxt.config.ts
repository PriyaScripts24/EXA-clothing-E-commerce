// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/main.css",
    "notivue/notification.css", // Only needed if using built-in notifications
    "notivue/animations.css",
  ],
  modules: ["@nuxtjs/google-fonts", "notivue/nuxt"],

  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
