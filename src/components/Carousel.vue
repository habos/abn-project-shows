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
    <div class="cardPreview left" />
    <div class="navHolder prev" @click="prev">
      <img class="prevImg" :src="ArrowLeft" />
    </div>
    <div class="carousel">
      <div ref="inner" :style="innerStyles" class="inner">
        <div v-for="card in cards" :key="card" class="card">
          <ShowItem :show="card" />
        </div>
      </div>
    </div>
    <div class="cardPreview right" />
    <div class="navHolder next" @click="next">
      <img class="nextImg" :src="ArrowRight" />
    </div>
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
    width: 85%;
    padding: 15px 0;
    overflow: hidden;
    display: inline-block;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
  }
  .card {
    margin-right: 14px;
    display: inline-flex;
  }

  .cardPreview {
    width: 106px;
    height: 240px;
    border-radius: 15px;
    background: linear-gradient(
      174.15deg,
      rgba(81, 174, 167, 0.3) 9.29%,
      rgba(217, 217, 217, 0) 92.94%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .left {
    margin-right: 10px;
  }

  .right {
    margin-left: 10px;
  }

  .navHolder {
    position: absolute;
    cursor: pointer;
    width: 42px;
    height: 42px;
    z-index: 2;
    background-color: #d9d9d9;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: transform;
    transition-duration: 0.5s;
  }

  .navHolder:hover {
    transform: scale(1.1);
  }

  .prev {
    left: -21px;
  }
  .next {
    right: -21px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  .prevImg {
    margin-right: 3px;
  }

  .nextImg {
    margin-left: 3px;
  }
</style>
