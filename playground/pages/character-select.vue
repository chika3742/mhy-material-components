<script setup lang="ts">
import {ref} from "#imports"

const value = ref<string | null>(null)
</script>

<template>
  <CharacterSelect
    v-model="value"
    :characters="[{id: 'test', image: '/_nuxt/assets/img/test_small.webp'}]"
    label="test character select"
    max-width="400px"
    error="error message"
  />
</template>

<style scoped>

</style>
