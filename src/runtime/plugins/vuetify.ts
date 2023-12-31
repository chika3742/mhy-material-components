import {createVuetify, IconProps} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/lib/styles/main.sass"
import {FunctionalComponent, h} from "vue"
import {defineNuxtPlugin} from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: "#ee8411",
            star: "#ffff00",
            "button-activated": "#d24700",
            "rarity-5": "#f1931d",
            "rarity-4": "#c488fd",
            "rarity-3": "#3193e3",
            "rarity-2": "#38ab31",
            card: "#3a3a3a",
            "slight-heading": "#bebebe",
            bookmarked: "#ff8c00",
            "partially-bookmarked": "#90d31f",
          },
        },
        light: {
          dark: false,
          colors: {
            primary: "#008cff",
            secondary: "#4CAF50",
            star: "#ff8c00",
            "button-activated": "#ff5900",
            "rarity-5": "#f1931d",
            "rarity-4": "#c488fd",
            "rarity-3": "#1593f6",
            "rarity-2": "#3db236",
            card: "#ececec",
            "slight-heading": "#757575",
            bookmarked: "#ff2600",
            "partially-bookmarked": "#66a200",
          },
        },
      },
    },
    icons: {
      defaultSet: "mdi",
      sets: {
        ms: {
          component: ((params) => {
            return h("i", {
              class: ["font-material-symbols-outlined"],
              textContent: params.icon,
            })
          }) as FunctionalComponent<IconProps>,
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
