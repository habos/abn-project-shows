<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const props = defineProps<{
    rating: number;
  }>();

  const ratingRef = ref();
  const ratingStyles = ref({});

  onMounted(() => {
    const cw = ratingRef.value.clientWidth; // save original 100% pixel width

    ratingRef.value.style.width = Math.round(cw * (props.rating / 10)) + 'px';
  });
</script>

<template>
  <div ref="ratingRef" :style="ratingStyles" class="rating"></div>
</template>

<style scoped>
  .rating {
    font-size: 15px;
    color: orange;
    display: inline-block;
    overflow: hidden;
  }
  .rating::before {
    content: '★★★★★';
  }
</style>
