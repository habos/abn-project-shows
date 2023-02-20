<script setup lang="ts">
  import AbnAmro from '../../assets/abn-amro.png';
  import DropDown from '../DropDown.vue';
  import SearchBar from '../SearchBar.vue';
</script>

<template>
  <div class="header">
    <div class="innerBox">
      <img class="logo" height="30" :src="AbnAmro" />
      <SearchBar class="searchBar" />
      <DropDown title="Genres" :dropdown-list="['Drama', 'Comedy', 'Horror']" />
    </div>
  </div>
</template>

<style scoped>
  .header {
    height: 5rem;
    background-color: #1b1e21;
  }

  .innerBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 85%;
  }

  .logo {
    margin: 1rem -1rem;
  }
</style>
