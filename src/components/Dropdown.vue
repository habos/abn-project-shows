<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const props = defineProps<{
    dropdownList: string[];
    title: string;
  }>();
  const router = useRouter();
</script>

<template>
  <div id="dropdown" onclick="">
    <button id="dropbtn">
      {{ props.title }}
      <div class="arrow"></div>
    </button>

    <div class="dropdown-content">
      <a
        v-for="option in props.dropdownList"
        :key="option"
        @click="router.push({ name: 'home' })"
        :href="'#' + option"
        >{{ option }}</a
      >
    </div>
  </div>
</template>

<style scoped>
  #dropbtn {
    background-color: #1d857c;
    color: white;
    width: 8.5rem;
    height: 2rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  #dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #1d857c;
    min-width: 8.5rem;
    height: 14rem;
    overflow: auto;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.75rem 1rem;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #1f5a55;
  }

  #dropdown:hover .dropdown-content {
    display: block;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;

    border-bottom: 7px solid white;
  }

  #dropdown:hover .arrow {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;

    border-top: 7px solid white;
    border-bottom: none;
  }
</style>
