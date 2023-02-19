<script setup lang="ts">
  import useShows from '@/composibles/shows';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const { show, getShowInfo } = useShows();
  const route = useRoute();

  //Get recipe description based on id from url params
  onMounted(() => {
    getShowInfo(route.params.id as string);
  });
</script>

<template>
  <div class="detailsBackground">
    <div class="detailsBox">
      <div class="textBox">
        <h1>{{ show.name }}</h1>
        <h3>Summary</h3>
        <p class="instructions" v-html="show.summary" />
      </div>

      <img
        v-if="show.image"
        class="image"
        :src="show.image.medium"
        alt="Meal Image"
      />
    </div>
  </div>
</template>

<style scoped>
  .detailsBackground {
    height: fit-content;
    background-color: #f8faf9;
    display: flex;
  }

  .detailsBox {
    height: fit-content;
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 3rem auto;
    box-shadow: 0 0 15px gray;
    border-radius: 15px;
    color: #005e5d;
  }

  .textBox {
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 50%;
  }

  img {
    margin: 8rem auto auto auto;
    width: 20rem;
    border-radius: 15px;
  }

  h3 {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }

  p {
    margin: 5px 0;
  }

  .ingredients {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dashed;
  }

  .instructions {
    text-align: justify;
  }

  .video {
    float: left;
    padding: 0 15px 10px 0;
  }
</style>
