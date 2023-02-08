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
    <div class="recipeItem">
      <img class="image" :src="props.recipe.strMealThumb" alt="Meal Image" />
      <h3 class="title">{{ props.recipe.strMeal }}</h3>
    </div>
  </router-link>
</template>

<style scoped>
  .recipeItem {
    height: 16rem;
    width: 16rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 0 15px gray;
    border-radius: 15%;
    transition-property: transform;
    transition-duration: 0.5s;
  }

  .recipeItem:hover {
    transform: scale(1.05);
  }

  .image {
    height: 75%;
    width: 100%;
    border-radius: 15% 15% 0px 0px;
  }

  a {
    color: #005e5d;
    text-decoration: inherit;
    text-align: center;
  }
</style>
