<script setup>
import Data from '@/data/test.json'

const imgList = Data
// console.log(imgList)
</script>

<template>
  <div gap-4 columns-1 lg:columns-4 md:columns-3 sm:columns-2 xl:columns-5>
    <div v-for="(item, index) in imgList" :key="index">
      <img rounded-lg w-full :src="item.url">
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
