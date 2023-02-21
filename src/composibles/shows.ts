import { ref, type Ref } from 'vue';
import axios from 'axios';

//Create and axios instance with baseURL
const http = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

//Refs for storing data
const show: Ref<any> = ref();
const shows: Ref<any[]> = ref([]);
const searchedShows: Ref<any[]> = ref([]);

export default function useShows() {
  //Get the first 250 shows from the api to display on the dashboard
  const getShows = async () => {
    try {
      const response = await http.get(`/shows`);
      shows.value = response.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get shows from api based on searched name
  const getSearchedShows = async (name: string) => {
    try {
      const response = await http.get(`/search/shows?q=${name}`);
      searchedShows.value = response.data.map((x: any) => x.show);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get show info along with cast based on id
  const getShowInfo = async (id: string) => {
    try {
      const response = await http.get(`/shows/${id}?embed=cast`);
      console.log(response.data);
      show.value = response.data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    show,
    shows,
    searchedShows,
    getSearchedShows,
    getShows,
    getShowInfo,
  };
}
