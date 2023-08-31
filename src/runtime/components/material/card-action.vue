<script setup lang="ts">
interface Props {
  icon: string
  iconColor?: string
  compact?: boolean
  loading?: boolean
}

defineProps<Props>()

interface Emits {
  (event: "click"): void
}

defineEmits<Emits>()
</script>

<template>
  <div
    v-ripple=""
    class="material-card-action-container d-flex align-center justify-center position-relative"
    :class="{compact, loading}"
    @click="$emit('click')"
  >
    <v-fade-transition leave-absolute>
      <v-icon
        v-if="!loading"
        :color="iconColor"
        size="small"
      >
        {{ icon }}
      </v-icon>

      <!-- loading indicator -->
      <v-progress-circular
        v-else
        indeterminate
        size="small"
        width="3"
      />
    </v-fade-transition>

    <slot name="menu" />

    <div
      class="hover-overlay"
    />
  </div>
</template>

<style scoped lang="scss">
.material-card-action-container {
  height: 45px;
  min-width: 40px;
  width: auto;
  padding: 0 8px;

  &.compact {
    width: 35px;
    min-width: 35px;
  }

  &.loading {
    pointer-events: none;
  }
}

.hover-overlay {
  background-color: currentColor;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
  }
}
</style>
