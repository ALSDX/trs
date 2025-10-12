<template>
  <RouterView />
</template>

<script setup>
  import { useBreakpoint } from '@/composables/useBreakpoint';
  import { watch } from 'vue';
  import { RouterView } from 'vue-router';

  const {isWide} = useBreakpoint(768);

  watch(isWide, (newVal) => {
    console.log(newVal)
  })
</script>

<style scoped>
 
</style>