<script setup lang="ts">
import {tx} from "../utils/i18n"
import {nextTick, ref, toRefs, useI18n, useRuntimeConfig, watch} from "#imports"

interface Props {
  modelValue: boolean
  user?: UserInfoResponse | undefined
  loading?: boolean | undefined
  getters: DataSyncMapGetters
}

const props = defineProps<Props>()

interface Emits {
  (e: "update:modelValue", value: boolean): void

  (e: "update:user", value: UserInfoResponse | undefined): void

  (e: "getData", uid: string): void

  (e: "import"): void
}

const emit = defineEmits<Emits>()

const i18n = useI18n()
const runtimeConfig = useRuntimeConfig().public.mmc

const equipmentI18nKey = runtimeConfig.i18nKeys.equipment

const validate = (v: string) => {
  return !!v.match(/^[0-9]*$/) || tx(i18n, "gameDataSync.invalidUid")
}

const uid = ref("")
const disableExpandTransition = ref(false)

const emitGetData = () => {
  if (uid.value === "" || validate(uid.value) !== true) {
    return
  }

  // clear user data
  emit("update:user", undefined)
  emit("getData", uid.value)
}

watch(toRefs(props).modelValue, (value) => {
  if (value) {
    // clear obtained data when dialog is opened
    disableExpandTransition.value = true
    emit("update:user", undefined)
    void nextTick(() => {
      disableExpandTransition.value = false
    })
  }
})
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    max-width="500px"
    scrollable
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card
      :title="tx('gameDataSync.title')"
      :subtitle="tx('gameDataSync.subtitle')"
    >
      <template #text>
        <p>{{ tx("gameDataSync.desc") }}</p>
        <v-text-field
          v-model="uid"
          class="my-2"
          autofocus
          :disabled="loading"
          :rules="[validate]"
          label="UID"
          @keyup.enter="emitGetData"
        />

        <v-slide-x-transition
          :disabled="disableExpandTransition"
        >
          <div
            v-if="user"
            class="d-flex flex-column g-4"
          >
            <!-- userinfo -->
            <div>
              <h4>{{ user.nickname }}</h4>
              <p style="font-size: 0.8em">
                <span>Lv.{{ user.level }}</span>
                <span class="ml-4">UID: {{ user.uid }}</span>
              </p>
            </div>

            <!-- character container -->
            <div
              v-for="character in user.characters"
              :key="character.nameJP"
              class="d-flex flex-column g-2"
            >
              <!-- header -->
              <div class="d-flex g-2 align-center">
                <v-img
                  :src="getters.getCharacterImage(getters.getCharacterId(character.nameJP))"
                  max-width="50px"
                  height="50px"
                />
                <div class="d-flex flex-column">
                  <h4>{{ tx(`characterNames.${getters.getCharacterId(character.nameJP)}`) }}</h4>
                  <p>
                    <span style="font-size: 0.8em">Lv.</span>
                    <span class="font-weight-bold">{{ character.level }}</span>
                  </p>
                </div>
              </div>

              <!-- skill levels -->
              <div class="d-flex g-2">
                <div
                  v-for="skill in character.skills"
                  :key="skill.type"
                  class="d-flex align-center g-1"
                >
                  <div class="skill-icon-container">
                    <v-img
                      :src="skill.iconUrl"
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <p>
                    <span style="font-size: 0.8em">Lv.</span>
                    <span class="font-weight-bold">{{ skill.level }}</span>
                  </p>
                </div>
              </div>

              <!-- equipment -->
              <div class="ml-8 d-flex align-center g-2">
                <v-img
                  :src="getters.getEquipmentImage(getters.getEquipmentId(character.equipment.nameJP))"
                  max-width="45px"
                  height="45px"
                />
                <div class="d-flex flex-column">
                  <h4>{{ tx(`${equipmentI18nKey}.${getters.getEquipmentId(character.equipment.nameJP)}`) }}</h4>
                  <p>
                    <span style="font-size: 0.8em">Lv.</span>
                    <span class="font-weight-bold">{{ character.level }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-slide-x-transition>
      </template>

      <template #actions>
        <v-spacer />
        <v-btn
          variant="text"
          :text="tx('common.cancel')"
          @click="$emit('update:modelValue', false)"
        />
        <v-btn
          variant="text"
          :text="user?.uid !== uid ? tx('gameDataSync.next') : tx('gameDataSync.import')"
          color="primary"
          :disabled="uid === '' || validate(uid) !== true"
          :loading="loading"
          @click="user?.uid !== uid ? emitGetData() : $emit('import')"
        />
      </template>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.skill-icon-container {
  background: radial-gradient(closest-side, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 85%, rgba(0, 0, 0, 0));
  padding: 2px;
}
</style>
