import {VueI18n} from "vue-i18n"
import {RouteLocationRaw} from "vue-router"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    localePath(route: RouteLocationRaw | string, locale?: string): string

    switchLocalePath(locale: string): string

    $t(key: string, values?: Record<string, unknown>): string

    $i18n: VueI18n
  }
}

export {}
