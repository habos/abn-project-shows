<script setup lang="ts">
  import { ref, onMounted, toRefs } from 'vue';
  import ShowItem from './shows/ShowItem.vue';
  import ArrowRight from '../assets/icons/ArrowRight.svg';
  import ArrowLeft from '../assets/icons/ArrowLeft.svg';

  const props = defineProps<{
    cards: any[];
  }>();

  const { cards } = toRefs(props);
  const innerStyles = ref({});
  const step = ref('');
  const transitioning = ref(false);
  const inner = ref();

  onMounted(() => {
    setStep();
    resetTranslate();
  });

  function setStep() {
    const innerWidth = inner.value.scrollWidth;
    const totalCards = cards.value.length;
    step.value = `${innerWidth / totalCards}px`;
  }

  function next() {
    if (transitioning.value) return;
    transitioning.value = true;
    moveLeft();
    afterTransition(() => {
      const card = cards.value.shift();
      if (card !== undefined) {
        cards.value.push(card);
        resetTranslate();
        transitioning.value = false;
      }
    });
  }

  function prev() {
    if (transitioning.value) return;
    transitioning.value = true;
    moveRight();
    afterTransition(() => {
      const card = cards.value.pop();
      if (card !== undefined) {
        cards.value.unshift(card);
        resetTranslate();
        transitioning.value = false;
      }
    });
  }

  function moveLeft() {
    innerStyles.value = {
      transform: `translateX(-${step.value})
                  translateX(-${step.value})`,
    };
  }

  function moveRight() {
    innerStyles.value = {
      transform: `translateX(${step.value})
                  translateX(-${step.value})`,
    };
  }

  function afterTransition(callback: any) {
    const listener = () => {
      callback();
      inner.value.removeEventListener('transitionend', listener);
    };
    inner.value.addEventListener('transitionend', listener);
  }

  function resetTranslate() {
    innerStyles.value = {
      transition: 'none',
      transform: `translateX(-${step.value})`,
    };
  }
</script>

<template>
  <div class="carousel-container">
    <img :src="ArrowLeft" @click="prev" />
    <div class="carousel">
      <div ref="inner" :style="innerStyles" class="inner">
        <div v-for="card in cards" :key="card" class="card">
          <ShowItem :show="card" />
        </div>
      </div>
    </div>
    <img class="next" :src="ArrowRight" @click="next" />
  </div>
</template>

<style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .carousel {
    width: 100%;
    padding: 15px 0;
    overflow: hidden;
    display: inline-block;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
    padding: 0 10px;
  }
  .card {
    margin-right: 20px;
    display: inline-flex;
  }

  img {
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 40px;
    z-index: 2;
    background-color: white;
    border-radius: 100px;
  }

  .next {
    right: 0;
  }
</style>
