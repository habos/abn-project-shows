<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import CarouselList from '@/components/CarouselList.vue';
  import { genreArr } from '@/utils/globals';
  import { onMounted } from 'vue';
  import { CardType } from '@/types';

  const { getShows, shows } = useShows();

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
  <div id="showListBackground">
    <div id="showListContainer" v-if="shows.length > 0">
      <div class="genreCarousel" v-for="genre in genreArr" :key="genre">
        <h3 :id="genre">{{ genre }}</h3>
        <div class="divider" />
        <CarouselList :cardType="CardType.Show" :cards="genreList(genre)" />
      </div>
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

  .genreCarousel {
    margin-top: 3rem;
  }

  .divider {
    width: 100%;
    height: 4px;
    margin-bottom: 1rem;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 0px 0px 50px rgba(10, 207, 131, 0.5),
      inset 0px 0px 20px rgba(10, 207, 131, 0.5);
    transform: matrix(1, 0, 0, -1, 0, 0);
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
