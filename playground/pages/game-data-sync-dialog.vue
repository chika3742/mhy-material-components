<script setup lang="ts">
import {definePageMeta, ref} from "#imports"

definePageMeta({
  title: "GameDataSyncDialog",
})

const show = ref(false)
const loading = ref(false)
const obtainedUser = ref<UserInfoResponse | undefined>(undefined)

const testShowcaseCharacter: ShowcaseCharacter = {
  nameJP: "三月なのか",
  level: 80,
  rank: 3,
  promotion: 6,
  equipment: {
    nameJP: "",
    level: 80,
    promotion: 6,
  },
  skills: [
    {
      type: "Normal",
      iconUrl: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/skill/1001_basic_atk.png",
      originalLevel: 7,
      extraLevel: 1,
    },
    {
      type: "BPSkill",
      iconUrl: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/skill/1001_skill.png",
      originalLevel: 8,
      extraLevel: 0,
    },
    {
      type: "Talent",
      iconUrl: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/skill/1001_talent.png",
      originalLevel: 9,
      extraLevel: 2,
    },
    {
      type: "Ultra",
      iconUrl: "https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/skill/1001_ultimate.png",
      originalLevel: 10,
      extraLevel: 0,
    },
  ],
}

const exampleUser: UserInfoResponse = {
  uid: "123456789",
  nickname: "example",
  level: 66,
  characters: new Array(8).fill(testShowcaseCharacter),
}

const getters: DataSyncMapGetters = {
  getEquipmentId: () => "test_eq",
  getEquipmentImage: () => "/_nuxt/assets/img/test_small.webp",
  getCharacterId: () => "test",
  getCharacterImage: () => "/_nuxt/assets/img/test_small.webp",
}

const getData = (uid: string) => {
  loading.value = true
  setTimeout(() => {
    obtainedUser.value = exampleUser
    obtainedUser.value.uid = uid
    loading.value = false
  }, 1000)
}
</script>

<template>
  <div>
    <v-btn
      text="Show"
      @click="show = true"
    />
    <GameDataSyncDialog
      v-model="show"
      v-model:user="obtainedUser"
      :getters="getters"
      :loading="loading"
      @get-data="getData"
    />
  </div>
</template>

<style scoped>

</style>
