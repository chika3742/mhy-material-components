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

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint
```

<!-- Links -->
[genshin-material-repo-url]: https://github.com/chika3742/genshin-material
[hsr-material-repo-url]: https://github.com/chika3742/hsr-material
