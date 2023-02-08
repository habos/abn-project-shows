<script setup lang="ts">
  import Header from './Header.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div id="layout" class="layout">
    <Header />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
  }
</style>
