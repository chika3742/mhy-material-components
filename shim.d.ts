import {VueI18n} from "vue-i18n"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    localePath(route: string, locale?: string): string

    switchLocalePath(locale: string): string

    $t(key: string, values?: Record<string, unknown>): string

    $i18n: VueI18n
  }
}

export {}
