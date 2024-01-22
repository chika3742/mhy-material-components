export default defineNuxtConfig({
  modules: ["../src/module", "@nuxtjs/i18n"],
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
  },
  mhyMaterialComponents: {},
})
