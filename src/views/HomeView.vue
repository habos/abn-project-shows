<script setup lang="ts">
  import MealList from '@/components/meals/MealList.vue';
  import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <div class="search">
    <SearchBar class="search-bar" />
  </div>
  <MealList />
</template>

<style scoped>
  .search {
    background-color: #e2edec;
    height: 10rem;
  }
  .search-bar {
    justify-content: center;
    padding-top: 7rem;
  }
</style>
