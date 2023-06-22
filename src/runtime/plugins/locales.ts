import {defineNuxtPlugin} from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  const locs = {
    ja: {
      "hello-world": "こんにちは世界",
      pityCounter: {
        title: "天井カウンター",
      },
    },
    en: {
      "hello-world": "Hello World",
    },
  }

  // @ts-ignore
  nuxtApp.$i18n.mergeLocaleMessage("ja", locs.ja)
  // @ts-ignore
  nuxtApp.$i18n.mergeLocaleMessage("en", locs.en)
})
