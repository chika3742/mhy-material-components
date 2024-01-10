<script setup lang="ts">
import {definePageMeta, ref} from "#imports"

definePageMeta({
  title: "Bottom Nav",
})

const items: BottomNavigationItem[] = [
  {
    icon: "mdi-home",
    titleI18nKey: "ブックマーク",
    path: "/home",
  },
  {
    icon: "mdi-history",
    titleI18nKey: "データベース",
    path: "/recents",
  },
  {
    icon: "mdi-heart",
    titleI18nKey: "favs",
    path: "/favs",
  },
  {
    icon: "mdi-bookmark",
    titleI18nKey: "Bookmarks",
    path: "/bookmarks",
  },
]

const currentPath = ref("")

</script>

<template>
  <AppBottomNavigation
    v-model="currentPath"
    :items="items"
  />
</template>

<style scoped>

</style>
