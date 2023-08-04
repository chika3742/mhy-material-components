<script lang="ts" setup>
import {onMounted, useI18n, useRoute} from "#imports"

interface Props {
  modelValue: string | undefined
  label?: string
  characters: { id: string, image: string }[]
  maxWidth?: string
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  maxWidth: "unset",
  error: "",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
  (e: "update:error", value: string): void
}>()

const i18n = useI18n()
const route = useRoute()

const vSelectItems = props.characters.map(character => ({
  title: i18n.t(`characterNames.${character.id}`),
  value: character.id,
  image: character.image,
}))

onMounted(() => {
  const character = props.characters.find(e => e.id === route.query.character)
  if (character) {
    emit("update:modelValue", character.id)
  } else {
    emit("update:modelValue", props.characters[0].id)
  }
})

</script>

<template>
  <v-select
    :error-messages="error"
    :items="vSelectItems"
    :label="label"
    :model-value="modelValue"
    :style="{'max-width': maxWidth}"
    class="mt-2"
    @blur="$emit('update:error', '')"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #item="{props: _props, item}">
      <v-list-item
        :title="item.title"
        v-bind="_props"
      >
        <template #prepend>
          <div class="d-flex align-center mr-2">
            <v-img
              :src="item.raw.image"
              aspect-ratio="1"
              width="40"
            />
          </div>
        </template>
      </v-list-item>
    </template>
  </v-select>
</template>

<style lang="sass" scoped>

</style>
