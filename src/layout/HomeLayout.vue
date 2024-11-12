<template>
  <div>
    <Header />
    <RouterView>
      <slot></slot>
    </RouterView>
  </div>
</template>
<script setup>
import Header from '@/page/Header.vue'
</script>
