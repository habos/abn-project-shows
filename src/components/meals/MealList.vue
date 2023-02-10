<script setup lang="ts">
  import { onMounted } from 'vue';
  import useRecipes from '@/composibles/recipes';
  import MealItem from './MealItem.vue';
  const { recipes, getRandomRecipe } = useRecipes();
  onMounted(() => {
    //Only refresh Recipes if there are none
    if (recipes.value.length < 1) {
      getRandomRecipe();
    }
  });
</script>

<template>
  <div v-if="recipes !== null" class="list">
    <MealItem v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
  </div>
  <h1 v-else>No Recipes Found</h1>
</template>

<style scoped>
  .list {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 21rem;
  }

  h1 {
    margin-top: 3rem !important;
    text-align: center;
    color: #005e5d;
  }
</style>
