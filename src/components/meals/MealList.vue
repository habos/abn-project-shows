<script setup lang="ts">
  import { computed, ref, onMounted } from 'vue';
  import useRecipes from '@/composibles/recipes';
  import MealItem from './MealItem.vue';
  const { recipes, getRandomRecipe } = useRecipes();
  onMounted(getRandomRecipe);
</script>

<template>
  <div class="list">
    <MealItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>

<style scoped>
  .list {
    background-color: #F8FAF9;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 12rem;
  }
</style>
