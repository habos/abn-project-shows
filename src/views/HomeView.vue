<script setup lang="ts">
  import Dropdown from '@/components/DropDown.vue';
  import MealList from '@/components/meals/MealList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import Toggle from '@/components/ToggleButton.vue';
  import useRecipes from '@/composibles/recipes';
  import { onMounted, ref } from 'vue';

  const {
    categories,
    areas,
    getCategories,
    getAreas,
    getRecipesByCategory,
    getRecipesByArea,
  } = useRecipes();

  //Get categories and areas for dropdown menus
  onMounted(() => {
    getCategories();
    getAreas();
  });

  //Create refs for search state
  const liveSearch = ref(false);
  const categoriesSearch = ref(false);
  const areasSearch = ref(false);
</script>

<template>
  <div class="search">
    <div class="searchBox">
      <h2>What are you searching for?</h2>
      <SearchBar
        v-if="!categoriesSearch && !areasSearch"
        :liveSearch="liveSearch"
      />
      <Dropdown
        v-if="categoriesSearch"
        @optionSelected="
          (option) => {
            getRecipesByCategory(option);
          }
        "
        :dropdownList="categories"
        title="Select Category"
      />
      <Dropdown
        v-if="areasSearch"
        @optionSelected="
          (option) => {
            getRecipesByArea(option);
          }
        "
        :dropdownList="areas"
        title="Select Area"
      />
    </div>
    <div class="optionsBox">
      <p>Live Search</p>
      <Toggle
        class="toggle"
        @toggle="
          () => {
            liveSearch = !liveSearch;
          }
        "
      />
      <p>Lookup by Category</p>
      <Toggle
        class="toggle"
        :disabled="areasSearch"
        @toggle="
          () => {
            categoriesSearch = !categoriesSearch;
          }
        "
      />
      <p>Lookup by Area</p>
      <Toggle
        class="toggle"
        :disabled="categoriesSearch"
        @toggle="
          () => {
            areasSearch = !areasSearch;
          }
        "
      />
    </div>
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
    min-height: 12rem;
    justify-content: center;
    align-items: center;
  }

  .optionsBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    grid-column-gap: 1rem;
    color: #00816E;
    font-weight: bold;
    margin-left: 4rem;
  }

  h2 {
    text-align: center;
    color: #00816E;
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
