<script setup lang="ts">
  import useRecipes from '@/composibles/recipes';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const { recipe, getRecipeDesc } = useRecipes();
  const route = useRoute();

  onMounted(() => {
    getRecipeDesc(route.params.id as string);
  });
</script>

<template>
  {{ recipe.strMeal }}
</template>
