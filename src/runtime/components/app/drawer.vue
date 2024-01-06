<script setup lang="ts">
import {useDisplay} from "vuetify"
import {computed} from "#imports"

const props = defineProps<{
  modelValue: boolean
  drawerItems: DrawerItemOrDivider[]
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()

const display = useDisplay()

const isOpen = computed({
  get() {
    return display.mobile.value ? props.modelValue : true
  },
  set(value: boolean) {
    emit("update:modelValue", value)
  },
})

</script>

<template>
  <v-navigation-drawer
    v-model="isOpen"
  >
    <v-list
      v-safe-area="{left: 8, top: true}"
      nav
    >
      <template v-for="(item, i) in drawerItems">
        <v-list-item
          v-if="item !== '---'"
          :key="i"
          :href="item.href"
          :prepend-icon="item.icon"
          :target="item.target"
          :title="item.title ? $t(`navDrawer.${item.title}`) : $getPageTitle(item.to!)"
          :to="item.to ? localePath(item.to) : undefined"
          density="comfortable"
          @click="item.onClick?.(); isOpen = false"
        />
        <v-divider
          v-else
          :key="i * 2"
          class="mb-1"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
