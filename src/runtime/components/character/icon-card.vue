<script lang="ts" setup>
import {computed, useI18n, useNuxtApp} from "#imports"

const props = defineProps<{
  characterId: string
  query?: Record<string, string>
  image: string
}>()

const i18n = useI18n()
const {$isTouchDevice} = useNuxtApp()

const characterName = computed(() => {
  return i18n.t(`characterNames.${props.characterId}`)
})
</script>

<template>
  <v-card
    :to="localePath({path: `/characters/${characterId}`, query})"
    color="card"
  >
    <div class="d-flex flex-column align-center">
      <v-img
        :src="image"
        aspect-ratio="a"
        width="80px"
      />

      <v-card-subtitle
        v-show="$isTouchDevice"
        class="px-2 py-1"
      >
        {{ characterName }}
      </v-card-subtitle>
    </div>

    <client-only>
      <v-tooltip
        :disabled="$isTouchDevice as boolean"
        activator="parent"
        location="bottom"
        open-delay="100"
      >
        <span>{{ characterName }}</span>
      </v-tooltip>
    </client-only>
  </v-card>
</template>

<style lang="sass" scoped>

</style>
