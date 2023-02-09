<script setup lang="ts">
  import AbnAmro from '../../assets/abn-amro.png';
</script>

<template>
  <div class="header">
    <img class="logo" height="30" :src="AbnAmro" />
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
    height: 4rem;
  }

  .logo {
    margin: 1rem;
  }
</style>
