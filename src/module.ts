import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from "@nuxt/kit"
import * as fs from "fs"
import jsYaml from "js-yaml"
import defu from "defu"

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
    async "i18n:extend-messages"(messages) {
      const resolver = createResolver(import.meta.url)
      messages.push({
        ja: jsYaml.load(fs.readFileSync(resolver.resolve("./runtime/locales/ja.yaml"), "utf8")) as any,
        en: jsYaml.load(fs.readFileSync(resolver.resolve("./runtime/locales/en.yaml"), "utf8")) as any,
      })
    },
  },
})
