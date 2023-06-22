# mhy-material-components

Common components to [genshin-material][genshin-material-repo-url] and [hsr-material][hsr-material-repo-url].

**Not intended for use by external products**

## Installation

1. Add dependency to your project

    ```bash
    # Using yarn
    yarn add git+https://github.com/chika3742/mhy-material-components.git
   ```

2. Add `std-components` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: [
        'std-components'
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
