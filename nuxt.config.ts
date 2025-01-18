// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-vuefire",'vue-clerk/nuxt'],
  clerk: {
    appearance: {},
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyAY7FsO0j2z4mwrSypC3YM1FRqBoN9Z_m0",
      authDomain: "lecture-tinder.firebaseapp.com",
      projectId: "lecture-tinder",
      storageBucket: "lecture-tinder.firebasestorage.app",
      // messagingSenderId: "972001321312",
      appId: "1:972001321312:web:136b1d19fb8e5714d57e05",
    },
    auth: {
      enabled: true,
      sessionCookie: true,
    },
  },
});
