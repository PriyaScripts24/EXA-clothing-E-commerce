// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@nuxtjs/google-fonts'],

  googleFonts:{
    families:{
    Poppins:true,  }},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})