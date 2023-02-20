<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import useShows from '@/composibles/shows';
  import Carousel from '@/components/Carousel.vue';
  import { onMounted, ref } from 'vue';
  import ShowList from '@/components/shows/ShowList.vue';

  const { getShows, shows, searchedShows } = useShows();

  //Get categories and areas for dropdown menus
  onMounted(getShows);

  //Get a list of shows per genre sorted by rating
  const genreList = (genre: string) => {
    return shows.value
      .filter((show: any) => {
        if (show.genres.includes(genre)) return show;
      })
      .sort((a, b) => {
        return a.rating
          ? b.rating
            ? b.rating.average - a.rating.average
            : 1
          : -1;
      })
      .slice(0, 10);
  };
</script>

<template>
  <div class="search">
    <div class="searchBox">
      <h2>What are you searching for?</h2>
      <SearchBar />
    </div>
  </div>
  <div class="mealListBackground">
    <ShowList v-if="searchedShows !== undefined && searchedShows.length > 0" />
    <div v-else-if="shows.length > 0">
      <h3>Drama</h3>
      <Carousel :cards="genreList('Drama')" />
      <h3>Horror</h3>
      <Carousel :cards="genreList('Horror')" />
      <h3>Romance</h3>
      <Carousel :cards="genreList('Romance')" />
      <h3>Comedy</h3>
      <Carousel :cards="genreList('Comedy')" />
      <h3>Science-Fiction</h3>
      <Carousel :cards="genreList('Science-Fiction')" />
      <h3>Fantasy</h3>
      <Carousel :cards="genreList('Fantasy')" />
    </div>
  </div>
</template>

<style scoped>
  .search {
    display: flex;
    flex-direction: row;
    background-color: #e2edec;
    min-height: 12rem;
    justify-content: center;
    align-items: center;
  }

  .optionsBox {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    grid-column-gap: 1rem;
    color: #00816e;
    font-weight: bold;
    margin-left: 4rem;
  }

  h2 {
    text-align: center;
    color: #00816e;
  }

  h3 {
    margin-left: 2rem;
    font-size: 1.4rem;
    color: #00816e;
  }

  .toggle {
    margin-left: 0.5rem;
  }

  .mealListBackground {
    height: 100%;
    background-color: #f8faf9;
  }

  .mealList {
    width: 75%;
    margin: 0 auto;
  }
</style>
