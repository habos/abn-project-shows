import { ref, type Ref } from 'vue';
import axios from 'axios';
import { emptyRecipe, type Recipe } from '@/types';

//Create and axios instance with baseURL
const http = axios.create({
  baseURL: 'https://www.themealdb.com',
});

//Refs for storing data
const recipe: Ref<Recipe> = ref(emptyRecipe);
const recipes: Ref<Recipe[]> = ref([]);
const categories: Ref<string[]> = ref([]);
const areas: Ref<string[]> = ref([]);

export default function useRecipes() {
  //Get recipes from api based on searched name
  const getSearchedRecipes = async (name: string) => {
    try {
      const response = await http.get(`/api/json/v1/1/search.php?s=${name}`);
      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get one random recipe
  const getRandomRecipe = async () => {
    try {
      const response = await http.get('/api/json/v1/1/random.php');
      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get recipe based on id
  const getRecipeDesc = async (id: string) => {
    try {
      const response = await http.get(`/api/json/v1/1/lookup.php?i=${id}`);
      console.log(response.data);
      recipe.value = response.data.meals[0];
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get all available categories
  const getCategories = async () => {
    try {
      const response = await http.get('/api/json/v1/1/list.php?c=list');
      categories.value = response.data.meals.map(
        (val: { strCategory: string }) => val.strCategory
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get all available areas
  const getAreas = async () => {
    try {
      const response = await http.get('/api/json/v1/1/list.php?a=list');
      areas.value = response.data.meals.map(
        (val: { strArea: string }) => val.strArea
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get recipes by the selected category
  const getRecipesByCategory = async (category: string) => {
    try {
      const response = await http.get(
        `/api/json/v1/1/filter.php?c=${category}`
      );
      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //Get recipes by the selected area
  const getRecipesByArea = async (area: string) => {
    try {
      const response = await http.get(`/api/json/v1/1/filter.php?a=${area}`);
      console.log(response.data);

      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    recipe,
    recipes,
    categories,
    areas,
    getRandomRecipe,
    getSearchedRecipes,
    getRecipeDesc,
    getCategories,
    getAreas,
    getRecipesByCategory,
    getRecipesByArea,
  };
}
