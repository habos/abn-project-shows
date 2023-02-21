<script setup lang="ts">
  import AbnAmro from '../../assets/abn-amro.png';
  import DropDown from '../DropDown.vue';
  import SearchBar from '../SearchBar.vue';
  import { genreArr } from '@/utils/globals';
</script>

<template>
  <div id="header">
    <div id="innerBox">
      <router-link :to="{ name: 'home' }">
        <img id="logo" height="30" :src="AbnAmro" />
      </router-link>
      <SearchBar id="searchBar" />
      <DropDown id="dropdown" title="Genres" :dropdown-list="genreArr" />
    </div>
  </div>
</template>

<style scoped>
  #header {
    height: fit-content;
    background-color: #1b1e21;
  }

  #innerBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    width: 85%;
  }

  #dropdown {
    display: none;
  }

  #logo {
    margin: 1rem -1rem 2rem 0;
  }

  @media only screen and (min-width: 768px) {
    #dropdown {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 600px) {
    #innerBox {
      flex-direction: row;
    }

    #header {
      height: 8rem;
    }

    #logo {
      margin: 1rem -1rem 0 0;
    }
  }
</style>
