<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import { onMounted, watch } from 'vue';
  import ShowList from '@/components/shows/ShowList.vue';
  import { useRoute } from 'vue-router';

  const { getSearchedShows, searchedShows } = useShows();
  const route = useRoute();

  onMounted(() => {
    getSearchedShows(route.query.q as string);
  });

  watch(
    () => route.query.q,
    (query: any) => {
      getSearchedShows(query);
    }
  );
</script>

<template>
  <div id="showListBackground">
    <div class="genreBar">
      <div class="bar" />
      <h4 class="barText">Search Results</h4>
    </div>
    <div id="showListContainer">
      <ShowList
        v-if="searchedShows !== undefined && searchedShows.length > 0"
      />
      <h1 v-else>No Shows Found</h1>
    </div>
  </div>
</template>

<style scoped>
  #showListBackground {
    height: 100%;
    background-color: #1b1e21;
  }

  #showListContainer {
    width: 85%;
    margin: 3rem auto;
  }

  h2 {
    text-align: center;
    color: #00816e;
  }

  h3 {
    font-size: 15px;
    color: #ffffff;
    text-shadow: 0px 0px 25px #51aea7;
  }
</style>
