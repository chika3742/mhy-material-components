import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from "@nuxt/kit"
import yaml from "@rollup/plugin-yaml"

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

    nuxt.options.vite.plugins ||= []
    nuxt.options.vite.plugins.push(yaml({
      include: resolver.resolve("./runtime/locales/*.yaml"),
      exclude: "**",
    }))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    if (options.injectVuetify) {
      addPlugin(resolver.resolve("./runtime/plugins/vuetify"))
    }

    addPlugin(resolver.resolve("./runtime/plugins/is-touch-device"))
    addPlugin(resolver.resolve("./runtime/plugins/directives/safe-area"))

    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      watch: true,
    })
  },
  hooks: {
    // @ts-ignore
    async "i18n:registerModule"(registerModule) {
      const resolver = createResolver(import.meta.url)

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
        langDir: resolver.resolve("./runtime/locales/"),
      })
    },
  },
})
