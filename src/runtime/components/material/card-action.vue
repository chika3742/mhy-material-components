<script setup lang="ts">
interface Props {
  icon: string
  compact?: boolean
}

defineProps<Props>()

interface Emits {
  (event: "click"): void
}

defineEmits<Emits>()
</script>

<template>
  <div
    v-ripple
    class="material-card-action-container d-flex align-center justify-center position-relative"
    :class="{compact}"
    @click="$emit('click')"
  >
    <v-icon size="small">
      {{ icon }}
    </v-icon>

    <slot name="menu" />

    <div
      class="hover-overlay"
    />
  </div>
</template>

<style scoped lang="sass">
.material-card-action-container
  height: 45px
  min-width: 40px
  width: auto
  padding: 0 8px

  &.compact
    width: 35px
    min-width: 35px

.hover-overlay
  background-color: currentColor
  position: absolute
  width: 100%
  height: 100%
  opacity: 0

  &:hover
    opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))
</style>
