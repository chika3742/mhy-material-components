export default defineNuxtConfig({
  modules: ["../src/module", "@nuxtjs/i18n"],
  // @ts-ignore
  build: {
    transpile: ["vuetify"],
  },
  devtools: {enabled: true},
  i18n: {
    locales: [
      {
        code: "ja",
        iso: "ja-JP",
        file: "ja.yaml",
      },
    ],
    langDir: "./locales/",
    defaultLocale: "ja",
    vueI18n: {
      legacy: false,
      fallbackLocale: "ja",
    },
  },
  mhyMaterialComponents: {
    itemOptions: {
      expItems: [
        {
          id: "expItem1",
          expPerItem: 100,
        },
        {
          id: "expItem2",
          expPerItem: 500,
        },
      ],
    },
  },
})
