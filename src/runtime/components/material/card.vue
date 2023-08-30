<script setup lang="ts">
import {computed, ref, useNuxtApp, useRuntimeConfig} from "#imports"
import {BookmarkState} from "../../../types/bookmark-state"

interface Props {
  /**
   * Material ID. Not required if `isExpItem` is true.
   */
  materialId?: string
  /**
   * A method that returns the material image URL.
   */
  materialImage: (materialId: string) => string
  /**
   * Quantity of the material or exp.
   */
  quantity: number
  bookmarkState?: BookmarkState
  rarity?: number
  dimmed?: boolean
  isExpItem?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  bookmarkState: undefined,
  materialId: undefined,
  rarity: undefined,
})

interface Emits {
  (event: "toggle-bookmark", selectedExpItemId: string | undefined): void

  (event: "re-bookmark", selectedExpItemId: string | undefined): void
}

defineEmits<Emits>()

const {$isTouchDevice} = useNuxtApp()
const runtimeConfig = useRuntimeConfig().public.mhyMaterialComponents
const expItems = runtimeConfig.itemOptions.expItems

const markerColor = computed(() => {
  if (typeof props.rarity !== "undefined") {
    return `rgb(var(--v-theme-rarity-${props.rarity}))`
  } else {
    return ""
  }
})

const selectedExpItemIndex = ref(0)
const forwardSelectedExpItem = () => {
  selectedExpItemIndex.value = (selectedExpItemIndex.value + 1) % expItems.length
}

const _materialId = computed(() => {
  return props.isExpItem
    ? expItems[selectedExpItemIndex.value].id
    : props.materialId
})

const _quantity = computed(() => {
  return props.isExpItem
    ? Math.ceil(props.quantity / expItems[selectedExpItemIndex.value].expPerItem)
    : props.quantity
})

const bookmarkButtonIcon = computed(() => {
  switch (props.bookmarkState) {
    case "none":
      return "mdi-bookmark"
    case "partial":
      return "mdi-bookmark-minus"
    case "full":
      return "mdi-bookmark-check"
  }
})
const showBookmarkMenu = ref(false)
</script>

<template>
  <v-card
    v-show="_quantity !== 0"
    :class="dimmed ? 'dimmed' : ''"
    :v-slot:loader="false"
    color="card"
  >
    <div
      class="d-flex h-100"
    >
      <!--      <v-btn-->
      <!--        v-if="isExpItem"-->
      <!--        variant="text"-->
      <!--        icon="mdi-swap-horizontal"-->
      <!--        size="small"-->
      <!--        @click.prevent="forwardSelectedExpItem"-->
      <!--      />-->

      <MaterialCardAction
        v-if="isExpItem"
        icon="mdi-swap-horizontal"
        compact
        @click="forwardSelectedExpItem"
      />

      <!-- item & qty info -->
      <v-btn
        variant="text"
        class="d-flex align-center h-100 px-2"
        :rounded="0"
        style="gap: 4px"
        :to="localePath(`/materials/${_materialId}`)"
      >
        <v-img
          :src="materialImage(_materialId)"
          height="35"
          width="35"
        />
        <span
          v-show="$isTouchDevice"
          class="ml-1 font-kiwi-maru"
        >{{ $t(`materialNames.${_materialId}`) }}</span>
        <span
          class="ml-2 font-cairo"
          style="font-size: 1.2em"
        >×{{ _quantity }}</span>
      </v-btn>

      <MaterialCardAction
        v-if="bookmarkState"
        :icon="bookmarkButtonIcon"
        @click="bookmarkState === 'partial'
          ? showBookmarkMenu = !showBookmarkMenu
          : $emit('toggle-bookmark', isExpItem ? _materialId : undefined)"
      >
        <template #menu>
          <v-menu
            v-model="showBookmarkMenu"
            :open-on-click="false"
            activator="parent"
          >
            <v-list density="comfortable">
              <v-list-item
                lines="two"
                prepend-icon="mdi-bookmark-check"
                :title="$t('bookmark.reBookmark')"
                :subtitle="$t('bookmark.reBookmarkDesc')"
                @click="$emit('re-bookmark', isExpItem ? _materialId : undefined)"
              />
              <v-list-item
                lines="two"
                prepend-icon="mdi-delete"
                :title="$t('bookmark.unBookmark')"
                :subtitle="$t('bookmark.unBookmarkDesc')"
                @click="$emit('toggle-bookmark', isExpItem ? _materialId : undefined)"
              />
            </v-list>
          </v-menu>
        </template>
      </MaterialCardAction>
    </div>

    <div class="rarity-marker" />

    <client-only>
      <v-tooltip
        :disabled="$isTouchDevice as boolean"
        :open-delay="100"
        activator="parent"
        location="bottom"
      >
        <span class="font-kiwi-maru">{{ $t(`materialNames.${_materialId}`) }}</span>
      </v-tooltip>
    </client-only>
  </v-card>
</template>

<style lang="scss" scoped>
.rarity-marker {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 16px 16px;
  border-color: transparent transparent transparent v-bind(markerColor);
  z-index: 1;
  pointer-events: none;
}

.dimmed {
  opacity: 0.5;
}
</style>
