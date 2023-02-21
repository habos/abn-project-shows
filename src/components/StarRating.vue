<script setup lang="ts">
  import { onMounted, ref, toRefs } from 'vue';

  const props = defineProps<{
    rating: number;
  }>();

  const { rating } = toRefs(props);
  const ratingRef = ref();
  const cw = ref();

  onMounted(() => {
    cw.value = ratingRef.value.clientWidth; // save original 100% pixel width
  });

  //Find the width at which to display the stars
  const ratingStyles = () => {
    return {
      width: `${Math.round(cw.value * (rating.value / 10)) + 'px'}`,
    };
  };
</script>

<template>
  <div ref="ratingRef" :style="ratingStyles()" id="rating"></div>
</template>

<style scoped>
  #rating {
    font-size: 15px;
    color: orange;
    display: inline-block;
    overflow: hidden;
  }
  #rating::before {
    content: '★★★★★';
  }
</style>
