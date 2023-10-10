interface Plugins {
  $isTouchDevice: boolean
  $getPageTitle: (path: string) => string
}

declare module "#app" {
  interface NuxtApp extends Plugins {
  }
}

declare module "vue" {
  interface ComponentCustomProperties extends Plugins {
  }
}

export {}
