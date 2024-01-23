<script setup>
defineProps({
  imgInfo: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div>
    <img :src="imgInfo.url" rounded-lg w-full>
  </div>
</template>

<style lang="scss" scoped>

</style>
