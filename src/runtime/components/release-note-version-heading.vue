<script lang="ts" setup>
interface Props {
  item: ReleaseNote
  previousItem: ReleaseNote | undefined
}

defineProps<Props>()
</script>

<template>
  <div>
    <span
      v-if="item.funcVersion !== previousItem?.funcVersion"
      class="font-weight-bold"
    >v{{ item.funcVersion }}</span>
    <span
      v-if="item.dataVersion !== previousItem?.dataVersion"
      class="font-weight-bold"
    >D{{ item.dataVersion }}</span>
    <span style="font-size: 0.8em">{{ item.date }}</span>
  </div>
</template>

<style lang="sass">
.changelog-title
  display: flex
  flex-direction: column
  align-items: flex-end

  &--mobile
    display: flex
    flex-direction: column
    padding: 4px 16px
    margin-bottom: 8px
    background: rgb(var(--v-theme-card))
    border-radius: 8px
    width: 250px
    max-width: 250px

.timeline
  overflow: hidden
  padding: 0 16px
  transition: height 300ms ease

.show-more-blur
  position: absolute
  width: 100%
  bottom: 0
  height: 150px
  display: flex
  justify-content: center
  align-items: flex-end

  &__btn
    z-index: 2

  &::before
    content: ""
    position: absolute
    width: 100%
    height: 100%
    z-index: 1
    backdrop-filter: blur(4px)
    mask: linear-gradient(to bottom, transparent 0%, black 50%)
</style>
