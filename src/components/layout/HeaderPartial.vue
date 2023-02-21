<script setup lang="ts">
  import AbnAmro from '../../assets/abn-amro.png';
  import DropDown from '../DropDown.vue';
  import SearchBar from '../SearchBar.vue';
  import { genreArr } from '@/utils/globals';
</script>

<template>
  <div class="header">
    <div class="innerBox">
      <router-link :to="{ name: 'home' }">
        <img class="logo" height="30" :src="AbnAmro" />
      </router-link>
      <SearchBar class="searchBar" />
      <DropDown class="dropdown" title="Genres" :dropdown-list="genreArr" />
    </div>
  </div>
</template>

<style scoped>
  .header {
    height: fit-content;
    background-color: #1b1e21;
  }

  .innerBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    width: 85%;
  }

  .dropdown {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .dropdown {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 600px) {
    .innerBox {
      flex-direction: row;
    }

    .header {
      height: 8rem;
    }
  }

  .logo {
    margin: 1rem -1rem 0 0;
  }
</style>
