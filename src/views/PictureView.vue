<script setup>
import { ref } from 'vue'
import Data from '@/assets/data/test.json'

const dataList = Data
const imgInfo = ref({})
const boxEnable = ref(false)

function getInfo(item) {
  imgInfo.value = item
  boxEnable.value = true
}

function closeBox() {
  boxEnable.value = false
}
</script>

<template>
  <!-- lightbox -->
  <div v-if="boxEnable" @click="closeBox">
    <div bg-black class="opacity-80 absolute fixed wh-full top-0 z-1" />
    <div f-c-c absolute fixed w-full z-50>
      <img :src="imgInfo.url" rounded-lg h-75vh alt="">
    </div>
  </div>
  <!-- main -->
  <div mx-3 gap-4 absolute columns-1 lg:columns-4 md:columns-3 sm:columns-2 xl:columns-5>
    <div v-for="(item, index) in dataList" :key="index" @click="getInfo(item)">
      <img mb-2 rounded w-full :src="item.url">
    </div>
  </div>
</template>

<style lang="css" scoped></style>
