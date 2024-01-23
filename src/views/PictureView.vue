<script setup>
import Data from '@/assets/data/test.json'

const dataList = Data
</script>

<template>
  <div mx-4 columns-1 lg:columns-4 md:columns-3 sm:columns-2 xl:columns-5>
    <a-image-preview-group infinite>
      <div v-for="(item, index) in dataList" :key="index">
        <a-image class="mb-4 rounded-lg" show-loader w-full :src="item.url" />
      </div>
    </a-image-preview-group>
  </div>
</template>

<style lang="scss" scoped>

</style>
