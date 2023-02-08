<script setup lang="ts">
  import Header from './Header.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div id="layout" class="layout">
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
