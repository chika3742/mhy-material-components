export default defineNuxtConfig({
  modules: ["../src/module"],
  mhyMaterialComponents: {},
  // @ts-ignore
  build: {
    transpile: ["vuetify"],
  },
  devtools: {enabled: true},
})
