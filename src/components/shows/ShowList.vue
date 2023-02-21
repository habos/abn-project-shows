<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import ShowItem from './ShowItem.vue';
  const { searchedShows } = useShows();
</script>

<template>
  <div id="showListContainer">
    <ShowItem
      v-for="show in searchedShows"
      v-bind:key="show.id"
      :bigger="true"
      :show="show"
    />
  </div>
</template>

<style scoped>
  #showListContainer {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 21rem;
  }

  @media only screen and (min-width: 600px) {
    #showListContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 992px) {
    #showListContainer {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
