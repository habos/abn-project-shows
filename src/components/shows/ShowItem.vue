<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import MissingImage from '../../assets/missing-image.png';
  import StarRating from '../StarRating.vue';

  const props = defineProps<{
    show: any;
    bigger?: boolean;
  }>();
</script>

<template>
  <router-link :to="{ name: 'description', params: { id: props.show.id } }">
    <div :class="props.bigger ? 'showItem biggerItem' : 'showItem'">
      <img
        v-if="props.show.image"
        :class="props.bigger ? 'image biggerImage' : 'image'"
        :src="props.show.image.medium"
        alt="Show Image"
      />
      <img
        v-else
        :class="props.bigger ? 'image biggerImage' : 'image'"
        :src="MissingImage"
        alt="Show Missing Image"
      />
      <h3 class="title">{{ props.show.name }}</h3>
      <h4 v-if="bigger">{{ props.show.genres.join(' | ') }}</h4>
      <StarRating
        v-if="props.show.rating.average"
        :rating="props.show.rating.average"
      />
    </div>
  </router-link>
</template>

<style scoped>
  .showItem {
    height: fit-content;
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 10px 0;
    background: rgba(65, 114, 119, 0.19);
    border-radius: 15px;
    transition-property: transform;
    transition-duration: 0.5s;
  }

  .biggerItem {
    width: 15rem;
    background: rgba(65, 114, 119, 0.19);
  }

  .showItem:hover {
    transform: scale(1.05);
  }

  .image {
    height: 9.8rem;
    width: 85%;
  }

  .biggerImage {
    height: 14rem;
  }

  a {
    color: #fff;
    text-decoration: inherit;
    text-align: center;
    font-weight: normal;
    font-size: 0.75rem;
  }

  h4 {
    margin: 0 0 0.5rem 0;
  }
</style>
