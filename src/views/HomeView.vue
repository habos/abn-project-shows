<script setup lang="ts">
  import Dropdown from '@/components/Dropdown.vue';
  import MealList from '@/components/meals/MealList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import Toggle from '@/components/Toggle.vue';
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

  onMounted(() => {
    getCategories();
    getAreas();
  });

  const liveSearch = ref(false);
  const categoriesSearch = ref(false);
  const areasSearch = ref(false);
</script>

<template>
  <div class="search">
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
    />
    <Dropdown
      v-if="areasSearch"
      @optionSelected="
        (option) => {
          getRecipesByArea(option);
        }
      "
      :dropdownList="areas"
    />
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

  .optionsBox {
    position: absolute;
    top: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    left: 5rem;
    align-items: center;
    grid-column-gap: 1rem;
    color: #005e5d;
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
