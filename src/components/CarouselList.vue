<script setup lang="ts">
  import { ref, onMounted, toRefs } from 'vue';
  import ShowItem from './shows/ShowItem.vue';
  import CastItem from './CastItem.vue';
  import ArrowRight from '../assets/icons/ArrowRight.svg';
  import ArrowLeft from '../assets/icons/ArrowLeft.svg';
  import { CardType } from '@/types';

  const props = defineProps<{
    cards: any[];
    cardType: CardType;
  }>();

  const { cards, cardType } = toRefs(props);
  const innerStyles = ref({});
  const step = ref('');
  const transitioning = ref(false);
  const inner = ref();

  onMounted(() => {
    setStep();
    resetTranslate();
    prev();
  });

  //Set width for transition based on card width and total amount of cards
  function setStep() {
    const innerWidth = inner.value.scrollWidth;
    const totalCards = cards.value.length;
    step.value = `${innerWidth / totalCards}px`;
  }

  //Move one card to the right and add the first element of the array to the end
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

  //Move one card to the left and add the last element to the beginning
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

  //Translate the inner box left
  function moveLeft() {
    innerStyles.value = {
      transform: `translateX(-${step.value})
                  translateX(-${step.value})`,
    };
  }

  //Translate the inner box right
  function moveRight() {
    innerStyles.value = {
      transform: `translateX(${step.value})
                  translateX(-${step.value})`,
    };
  }

  //Perform callback after transition
  function afterTransition(callback: any) {
    const listener = () => {
      callback();
      inner.value.removeEventListener('transitionend', listener);
    };
    inner.value.addEventListener('transitionend', listener);
  }

  //Reset the translate so that it is always one step the the left
  function resetTranslate() {
    innerStyles.value = {
      transition: 'none',
      transform: `translateX(-${step.value})`,
    };
  }
</script>

<template>
  <div class="carousel-container">
    <div
      :class="
        cardType === CardType.Cast
          ? 'cardPreview left cardPreviewSmall'
          : 'cardPreview left'
      "
    />
    <div class="navHolder prev" @click="prev">
      <img class="prevImg" :src="ArrowLeft" />
    </div>
    <div class="carousel">
      <div ref="inner" :style="innerStyles" class="inner">
        <div v-for="card in cards" :key="card" class="card">
          <ShowItem v-if="cardType === CardType.Show" :show="card" />
          <CastItem v-else :castMember="card" />
        </div>
      </div>
    </div>
    <div
      :class="
        cardType === CardType.Cast
          ? 'cardPreview right cardPreviewSmall'
          : 'cardPreview right'
      "
    />
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
    margin: auto;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
  }
  .card {
    margin-right: 0.875rem;
    display: inline-flex;
  }

  .cardPreview {
    width: 6.625rem;
    height: 15rem;
    border-radius: 15px;
    background: linear-gradient(
      174.15deg,
      rgba(81, 174, 167, 0.3) 9.29%,
      rgba(217, 217, 217, 0) 92.94%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .cardPreviewSmall {
    height: 10rem;
    display: none;
  }

  .left {
    margin-right: 0.625rem;
  }

  .right {
    margin-left: 0.625rem;
  }

  .navHolder {
    position: absolute;
    cursor: pointer;
    width: 2.625rem;
    height: 2.625rem;
    z-index: 2;
    background-color: #d9d9d9;
    border-radius: 6.25rem;
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
    width: 1.25rem;
    height: 1.25rem;
  }

  .prevImg {
    margin-right: 3px;
  }

  .nextImg {
    margin-left: 3px;
  }

  @media only screen and (min-width: 600px) {
    .cardPreviewSmall {
      display: inherit;
    }
  }
</style>
