<script setup lang="ts">
  import Dropdown from '@/components/Dropdown.vue';
  import MealList from '@/components/meals/MealList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import Toggle from '@/components/Toggle.vue';
  import useRecipes from '@/composibles/recipes';
  import { onMounted, ref } from 'vue';

  const { categories, areas, getCategories, getAreas } = useRecipes();

  onMounted(() => {
    getCategories();
    getAreas();
  });

  const liveSearch = ref(false);
  function changeSearch() {
    console.log(liveSearch.value);
    liveSearch.value = !liveSearch.value;
  }
</script>

<template>
  <div class="search">
    <SearchBar :liveSearch="liveSearch" />
    <Toggle class="toggle" @toggle="changeSearch" />
    <Dropdown :dropdownList="categories" />
    <Dropdown :dropdownList="areas" />
  </div>
  <div class="mealListBackground">
    <MealList class="mealList" />
  </div>
</template>

<style scoped>
  .search {
    display: flex;
    flex-direction: row;
    background-color: #e2edec;
    min-height: 6rem;
    padding-top: 6rem;
    justify-content: center;
    align-items: center;
  }

  .toggle {
    margin-left: 0.5rem;
  }

  .mealListBackground {
    height: 100%;
    background-color: #f8faf9;
  }

  .mealList {
    width: 75%;
    margin: 0 auto;
  }
</style>
