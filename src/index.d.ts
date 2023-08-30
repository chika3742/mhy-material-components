declare module "@nuxt/schema" {
  interface PublicRuntimeConfig {
    mhyMaterialComponents: {
      itemOptions: {
        expItems: {
          id: string
          expPerItem: number
        }[],
      },
    },
  }
}

export {}
