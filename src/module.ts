import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from "@nuxt/kit"
import defu from "defu"
import yaml from "@rollup/plugin-yaml"

// Module options TypeScript interface definition
export interface ModuleOptions {
  injectVuetify?: boolean
  itemOptions?: {
    expItems?: {
      id: string
      expPerItem: number
    }[]
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "mhy-material-components",
    configKey: "mhyMaterialComponents",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    injectVuetify: true,
    itemOptions: {
      expItems: [],
    },
  },
  async setup(options, nuxt) {
    nuxt.options.vite.plugins ||= []
    nuxt.options.vite.plugins.push(yaml({
      exclude: "playground/locales/**",
    }))

    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    if (options.injectVuetify) {
      addPlugin(resolver.resolve("./runtime/plugins/vuetify"))
    }

    addPlugin(resolver.resolve("./runtime/plugins/is-touch-device"))

    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      watch: true,
    })

    nuxt.options.runtimeConfig.public.mhyMaterialComponents = defu(
      nuxt.options.runtimeConfig.public.mhyMaterialComponents,
      {
        itemOptions: options.itemOptions,
      },
    )

  },
  hooks: {
    // @ts-ignore
    async "i18n:registerModule"(registerModule) {
      registerModule({
        locales: [
          {
            code: "ja",
            iso: "ja-JP",
            file: "ja.yaml",
          },
          {
            code: "en",
            iso: "en-US",
            file: "en.yaml",
          },
        ],
        langDir: "src/runtime/locales/",
      })
    },
  },
})
