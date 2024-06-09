// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
  ],
  colorMode: {
    preference: "light",
  },
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
