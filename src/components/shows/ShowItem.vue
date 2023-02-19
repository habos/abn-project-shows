<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  const props = defineProps<{
    show: any;
  }>();
</script>

<template>
  <router-link :to="{ name: 'description', params: { id: props.show.id } }">
    <div class="recipeItem">
      <img
        v-if="props.show.image"
        class="image"
        :src="props.show.image.medium"
        alt="Show Image"
      />
      <h3 class="title">{{ props.show.name }}</h3>
    </div>
  </router-link>
</template>

<style scoped>
  .recipeItem {
    height: fit-content;
    width: 14rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 15%;
    transition-property: transform;
    transition-duration: 0.5s;
    background-color: #e2edec;
  }

  .recipeItem:hover {
    transform: scale(1.05);
  }

  .image {
    height: 14rem;
    width: 100%;
    border-radius: 15% 15% 0px 0px;
  }

  a {
    color: #005e5d;
    text-decoration: inherit;
    text-align: center;
  }

  h3 {
    padding: 0 0.5rem;
  }
</style>
