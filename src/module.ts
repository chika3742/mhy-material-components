import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from "@nuxt/kit"
import * as fs from "fs"
import jsYaml from "js-yaml"

// Module options TypeScript interface definition
export interface ModuleOptions {
  injectVuetify?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "mhy-material-components",
    configKey: "mhyMaterialComponents",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    injectVuetify: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    if (options.injectVuetify) {
      addPlugin(resolver.resolve("./runtime/plugins/vuetify"))
    }

    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      watch: true,
    })
  },
  hooks: {
    async "i18n:extend-messages"(messages) {
      const resolver = createResolver(import.meta.url)
      messages.push({
        ja: jsYaml.load(fs.readFileSync(resolver.resolve("./runtime/locales/ja.yaml"), "utf8")) as any,
        en: jsYaml.load(fs.readFileSync(resolver.resolve("./runtime/locales/en.yaml"), "utf8")) as any,
      })
    },
  },
})
