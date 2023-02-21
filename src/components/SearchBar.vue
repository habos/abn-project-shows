<script setup lang="ts">
  import router from '@/router';
  import SearchIcon from '../assets/icons/SearchIcon.svg';

  let searchInput: string = '';

  function search() {
    router.push({ path: '/search', query: { q: searchInput } });
  }
</script>

<template>
  <div class="searchBar">
    <input
      id="searchQueryInput"
      type="text"
      placeholder="What are you looking for?"
      name="searchQueryInput"
      v-model="searchInput"
      @keypress.enter="search"
    />
    <button
      id="searchQuerySubmit"
      type="submit"
      name="searchQuerySubmit"
      @click="search"
    >
      <img :src="SearchIcon" />
    </button>
  </div>
</template>

<style scoped>
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #searchQueryInput {
    width: 14rem;
    height: 2rem;
    outline: none;
    border: none;
    background-color: #d9d9d9;
    border-radius: 1.625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 1rem;
  }

  #searchQuerySubmit {
    width: 3rem;
    height: 2rem;
    margin-left: -3rem;
    background: #1d857c;
    border-radius: 0 1.625rem 1.625rem 0;
    border: none;
    outline: none;
  }

  #searchQuerySubmit:hover {
    cursor: pointer;
  }

  img {
    margin-top: 3px;
  }
</style>
