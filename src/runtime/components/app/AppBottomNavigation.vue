<script setup lang="ts">
import {tx} from "../../utils/i18n"

interface Props {
  modelValue: string
  items: BottomNavigationItem[]
}
defineProps<Props>()

interface Emits {
  (e: "update:modelValue", value: string): void
}
defineEmits<Emits>()

</script>

<template>
  <v-bottom-navigation
    :model-value="modelValue"
    color="primary"
    mandatory
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-btn
      v-for="item in items"
      :key="item.path"
      :value="item.path"
      class="bottom-nav-btn"
      :class="modelValue === item.path ? 'selected' : ''"
    >
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ tx(item.labelI18nKey) }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style lang="sass" scoped>
.bottom-nav-btn
  flex: 1
  word-break: keep-all

  &.selected
    flex: 1.2
</style>
