<script setup lang="ts">
import {ref} from "#imports"

const isDrawerOpen = ref(false)

interface DrawerItem {
  title: string
  to: string
}

const drawerItems: DrawerItem[] = [
  {title: "Home", to: "/"},
  {title: "Pity Counter", to: "/pity-counter"},
  {title: "CharacterCard", to: "/character-card"},
  {title: "CharacterIconCard", to: "/character-icon-card"},
]
</script>

<template>
  <v-app>
    <v-app-bar title="Component Playground">
      <template #prepend>
        <v-app-bar-nav-icon
          icon="mdi-menu"
          @click="isDrawerOpen = !isDrawerOpen"
        />
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-item
          v-for="item in drawerItems"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>
