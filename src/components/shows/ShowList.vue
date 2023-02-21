<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import ShowItem from './ShowItem.vue';
  const { searchedShows } = useShows();
</script>

<template>
  <div v-if="searchedShows !== null" class="list">
    <ShowItem
      v-for="show in searchedShows"
      v-bind:key="show.id"
      :bigger="true"
      :show="show"
    />
  </div>
  <h1 v-else>No Recipes Found</h1>
</template>

<style scoped>
  .list {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 21rem;
  }

  h1 {
    margin-top: 3rem !important;
    text-align: center;
    color: #005e5d;
  }

  @media only screen and (min-width: 600px) {
    .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 992px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
