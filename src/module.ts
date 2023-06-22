import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from "@nuxt/kit"

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
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    if (options.injectVuetify) {
      addPlugin(resolver.resolve("./runtime/plugins/vuetify"))
    }

    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      watch: true,
    })
  },
})
