# mhy-material-components

Components common to [genshin-material][genshin-material-repo-url] and [hsr-material][hsr-material-repo-url]. **Not intended for external use.**

**This module injects Vuetify into website.** (can be disabled by setting `injectVuetify` to `false`)

## Installation

1. Create `bunfig.toml` file in the root of your project

    ```toml
    [install.scopes]
    "@chika3742" = { token = "$GITHUB_TOKEN", url = "https://npm.pkg.github.com" }
    ```

2. Add dependency to project

    ```bash
    bun add @chika3742/mhy-material-components
    ```

3. Add `mhy-material-components` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        '@chika3742/mhy-material-components'
      ]
    })
    ```

   > **Warning**
   > This module must be placed before `@nuxtjs/i18n` module.

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn dev:prepare

# Develop with the playground
yarn dev

# Build the playground
yarn dev:build

# Run ESLint
yarn lint
```

<!-- Links -->
[genshin-material-repo-url]: https://github.com/chika3742/genshin-material
[hsr-material-repo-url]: https://github.com/chika3742/hsr-material
