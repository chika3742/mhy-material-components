<script setup lang="ts">

</script>

<template>
  <div
    class="d-flex"
    style="gap: 16px"
  >
    <MaterialCard
      material-id="test"
      :material-image="() => '/_nuxt/assets/img/test_small.webp'"
      bookmark-state="none"
      :quantity="100"
      :rarity="3"
      @toggle-bookmark="() => {console.log('toggle-bookmark')}"
      @re-bookmark="() => {console.log('re-bookmark')}"
    />

    <MaterialCard
      :material-image="() => '/_nuxt/assets/img/test_small.webp'"
      :quantity="5000"
      :rarity="4"
      bookmark-state="partial"
      is-exp-item
      @toggle-bookmark="(selectedExpItemId) => {console.log('toggle-bookmark', selectedExpItemId)}"
      @re-bookmark="(selectedExpItemId) => {console.log('re-bookmark', selectedExpItemId)}"
    />

    <MaterialCard
      material-id="test"
      :material-image="() => '/_nuxt/assets/img/test_small.webp'"
      :quantity="9000"
      :rarity="5"
      bookmark-state="full"
      @toggle-bookmark="(selectedExpItemId) => {console.log('toggle-bookmark', selectedExpItemId)}"
      @re-bookmark="() => {console.log('re-bookmark')}"
    />
  </div>
</template>

<style scoped>

</style>
