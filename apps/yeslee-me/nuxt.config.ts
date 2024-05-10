// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // "@nuxtjs/tailwindcss",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dsxispofm/image/upload/",
    },
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: "GTM-5DLND3S",
      },
    },
  },
});
