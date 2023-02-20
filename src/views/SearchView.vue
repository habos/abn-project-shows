<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import { onMounted, onUnmounted, onUpdated, watch } from 'vue';
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
      console.log(query);
      getSearchedShows(query);
    }
  );
</script>

<template>
  <div class="showListBackground">
    <div class="showListContainer">
      <ShowList
        v-if="searchedShows !== undefined && searchedShows.length > 0"
      />
    </div>
  </div>
</template>

<style scoped>
  .showListBackground {
    height: 100%;
    background-color: #1b1e21;
  }

  .showListContainer {
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

  .divider {
    width: 100%;
    height: 4px;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 0px 0px 50px rgba(10, 207, 131, 0.5),
      inset 0px 0px 20px rgba(10, 207, 131, 0.5);
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  .toggle {
    margin-left: 0.5rem;
  }

  .showList {
    width: 75%;
    margin: 0 auto;
  }
</style>
