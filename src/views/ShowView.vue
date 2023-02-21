<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import MissingImage from '../assets/missing-image.png';
  import StarRating from '@/components/StarRating.vue';
  import CarouselList from '@/components/CarouselList.vue';
  import { CardType } from '@/types';
  const { show, getShowInfo } = useShows();
  const route = useRoute();

  //Get recipe description based on id from url params
  onMounted(() => {
    getShowInfo(route.params.id as string);
  });
</script>

<template>
  <div v-if="show !== undefined" id="detailsBackground">
    <div class="genreBar">
      <div class="bar" />
      <h4 class="barText">{{ show.genres.join(' | ') }}</h4>
    </div>
    <div id="detailsContainer">
      <h1>{{ show.name }}</h1>
      <div id="showImgAndDetails">
        <img
          v-if="show.image"
          class="image"
          :src="show.image.medium"
          alt="Show Image"
        />
        <img
          v-else
          class="image"
          :src="MissingImage"
          alt="Show Missing Image"
        />
        <div id="showDetails">
          <h2>Show Info</h2>
          <p v-if="show.network">
            {{
              'Network: ' + show.network.name + ', ' + show.network.country.code
            }}
          </p>
          <p v-if="show.webChannel">
            {{ 'Web Channel: ' + show.webChannel.name }}
          </p>
          <p v-if="show.schedule.days.length > 0">
            {{
              'Schedule: ' +
              show.schedule.days[0] +
              's at ' +
              show.schedule.time
            }}
          </p>
          <p v-if="show.averageRuntime">
            {{ 'Runtime: ' + show.averageRuntime + ' minutes' }}
          </p>
          <p v-if="show.premiered">
            {{ 'Premiered: ' + show.premiered }}
          </p>
          <p v-if="show.ended">
            {{ 'Ended: ' + show.ended }}
          </p>
          <p v-if="show.status">
            {{ 'Status: ' + show.status }}
          </p>
          <p v-if="show.type">
            {{ 'Show Type: ' + show.type }}
          </p>
          <p id="rating" v-if="show.rating.average">
            Rating:
            <StarRating :rating="show.rating.average" />
          </p>
        </div>
      </div>
      <div id="description">
        <h2>Description</h2>
        <p v-html="show.summary"></p>
      </div>
      <div v-if="show._embedded.cast.length > 0">
        <h2>Cast</h2>
        <CarouselList :card-type="CardType.Cast" :cards="show._embedded.cast" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  #detailsBackground {
    height: 100%;
    background-color: #1b1e21;
  }

  #detailsContainer {
    width: 85%;
    color: #fff;
    margin: 4rem auto;
  }

  #showImgAndDetails {
    min-height: 409px;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  #showDetails {
    margin-top: 2rem;
    width: 50%;
    background: rgba(230, 242, 243, 0.16);
    border-radius: 10px;
    padding: 2rem;
  }

  #description {
    margin-bottom: 5rem;
  }

  #rating {
    display: flex;
    align-content: center;
  }

  h1 {
    margin-bottom: 5rem;
    font-size: 2rem;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #fff;
  }

  img {
    width: 35%;
  }

  @media only screen and (min-width: 768px) {
    #showImgAndDetails {
      flex-direction: row;
      align-items: initial;
    }

    #showDetails {
      margin-top: 0;
    }

    h4 {
      left: 20%;
      transform: translateX(0);
    }
  }
</style>
