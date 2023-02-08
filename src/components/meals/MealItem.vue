<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  const props = defineProps<{
    recipe: any;
  }>();
</script>

<template>
  <router-link
    :to="{ name: 'description', params: { id: props.recipe.idMeal } }"
  >
    <div class="recipeItem">{{ props.recipe.strMeal }}</div>
  </router-link>
</template>

<style scoped>
  .recipeItem {
    height: 10rem;
    width: 16rem;
    display: flex;
    margin: auto;
    box-shadow: 0 0 15px gray;
    border-radius: 15%;
  }
</style>
