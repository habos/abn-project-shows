<script setup lang="ts">
  import MissingImage from '../assets/missing-image.png';

  const props = defineProps<{
    castMember: any;
  }>();
</script>

<template>
  <div class="castItem">
    <img
      v-if="props.castMember.person.image"
      class="image"
      :src="props.castMember.person.image.medium"
      alt="Show Image"
    />
    <img v-else class="image" :src="MissingImage" alt="Show Missing Image" />
    <div class="textContainer">
      <span class="nameTextBox"
        ><h3 class="name">{{ props.castMember.person.name }}</h3></span
      >
      <span class="characterTextBox"
        ><h5>as</h5>
        <h4>{{ props.castMember.character.name }}</h4></span
      >
    </div>
  </div>
</template>

<style scoped>
  .castItem {
    height: fit-content;
    width: 17.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 10px 0px 10px 10px;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 1px;
  }

  .image {
    height: 100%;
    width: 6rem;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
  }

  .nameTextBox {
    background-color: #12514c;
    width: 10rem;
  }

  .characterTextBox {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    width: 10rem;
    margin-left: 0.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h3 {
    color: #fff;
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  h4 {
    margin: 0;
    font-weight: bold;
    white-space: pre-wrap;
    margin-left: 5px;
  }
</style>
