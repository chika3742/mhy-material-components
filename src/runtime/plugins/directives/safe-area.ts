import {DirectiveBinding} from "vue"
import {defineNuxtPlugin} from "#imports"

export default defineNuxtPlugin(({vueApp}) => {
  interface SafeAreaOptions {
    /**
     * Whether to insert a safe area inset in the specific direction.
     * You can also specify a minimum value by passing a numerical value.
     * @default true
     */
    top?: boolean | number,
    /**
     * Whether to insert a safe area inset in the specific direction.
     * You can also specify a minimum value by passing a numerical value.
     * @default true
     */
    right?: boolean | number,
    /**
     * Whether to insert a safe area inset in the specific direction.
     * You can also specify a minimum value by passing a numerical value.
     * @default true
     */
    bottom?: boolean | number,
    /**
     * Whether to insert a safe area inset in the specific direction.
     * You can also specify a minimum value by passing a numerical value.
     * @default true
     */
    left?: boolean | number,
  }

  vueApp.directive("safe-area", {
    mounted(el, binding: DirectiveBinding<SafeAreaOptions>) {
      if (binding.value?.top !== false) {
        el.style.paddingTop = `max(env(safe-area-inset-top), ${typeof binding.value?.top === "number" ? binding.value?.top : 0}px)`
      }
      if (binding.value?.right !== false) {
        el.style.paddingRight = `max(env(safe-area-inset-right), ${typeof binding.value?.right === "number" ? binding.value?.right : 0}px)`
      }
      if (binding.value?.bottom !== false) {
        el.style.paddingBottom = `max(env(safe-area-inset-bottom), ${typeof binding.value?.bottom === "number" ? binding.value?.bottom : 0}px)`
      }
      if (binding.value?.left !== false) {
        el.style.paddingLeft = `max(env(safe-area-inset-left), ${typeof binding.value?.left === "number" ? binding.value?.left : 0}px)`
      }
    },
  })
})
