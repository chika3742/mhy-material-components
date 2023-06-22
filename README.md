# mhy-material-components

Components common to [genshin-material][genshin-material-repo-url] and [hsr-material][hsr-material-repo-url].

## Installation

1. Add dependency to your project

    ```bash
    yarn add mhy-material-components@https://github.com/chika3742/mhy-material-components#main
    ```

2. Add `mhy-material-components` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        'mhy-material-components'
      ]
    })
    ```

   > **Warning**
   >
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
