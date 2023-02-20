<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import MissingImage from '../assets/missing-image.png';
  import StarRating from '@/components/StarRating.vue';
  const { show, getShowInfo } = useShows();
  const route = useRoute();

  //Get recipe description based on id from url params
  onMounted(() => {
    getShowInfo(route.params.id as string);
  });
</script>

<template>
  <div v-if="show !== undefined" class="detailsBackground">
    <div class="genreBar">
      <div class="bar" />
      <h4>{{ show.genres.join(' | ') }}</h4>
    </div>
    <div class="detailsContainer">
      <h1>{{ show.name }}</h1>
      <div class="showImgAndDetails">
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
        <div class="showDetails">
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
          <p v-if="show.rating.average">
            Rating:
            <StarRating :rating="show.rating.average" />
          </p>
        </div>
      </div>
      <div class="description">
        <h2>Description</h2>
        <p v-html="show.summary"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .detailsBackground {
    height: 100%;
    background-color: #1b1e21;
  }

  .detailsContainer {
    width: 85%;
    color: #fff;
    margin: 4rem auto;
  }

  .genreBar {
    margin-top: 3rem;
    display: flex;
    align-items: center;
  }

  .bar {
    width: 100%;
    height: 4px;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 0px 0px 50px rgba(10, 207, 131, 0.5),
      inset 0px 0px 20px rgba(10, 207, 131, 0.5);
  }

  h4 {
    text-align: center;
    width: 20%;
    text-shadow: 0px 0px 25px #51aea7;
    position: absolute;
    left: 20%;
    z-index: 2;
    font-size: 15px;
    color: #ffffff;
    background-color: #1b1e21;
    white-space: nowrap;
  }

  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #fff;
  }

  img {
    width: 278px;
  }

  .showImgAndDetails {
    min-height: 409px;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
  }

  .showDetails {
    width: 697px;

    background: rgba(230, 242, 243, 0.16);
    border-radius: 10px;
    padding: 2rem;
  }
</style>
