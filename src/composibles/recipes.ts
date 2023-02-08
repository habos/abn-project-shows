import { ref, type Ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const http = axios.create({
  baseURL: 'https://www.themealdb.com',
});

const recipe: any = ref([]);
const recipes: Ref<any[]> = ref([]);
const categories: Ref<string[]> = ref([]);
const areas: Ref<string[]> = ref([]);

export default function useRecipes() {
  const router = useRouter();

  const getSearchedRecipes = async (name: string) => {
    try {
      const response = await http.get(`/api/json/v1/1/search.php?s=${name}`);
      console.log(response.data);

      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getRandomRecipe = async () => {
    try {
      const response = await http.get('/api/json/v1/1/random.php');
      console.log(response.data);
      recipes.value = response.data.meals;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getRecipeDesc = async (id: string) => {
    try {
      const response = await http.get(`/api/json/v1/1/lookup.php?i=${id}`);
      console.log(response.data);
      recipe.value = response.data.meals[0];
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const response = await http.get('/api/json/v1/1/list.php?c=list');
      console.log(response.data);
      categories.value = response.data.meals.map(
        (val: { strCategory: string }) => val.strCategory
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getAreas = async () => {
    try {
      const response = await http.get('/api/json/v1/1/list.php?a=list');
      console.log(response.data);
      areas.value = response.data.meals.map(
        (val: { strArea: string }) => val.strArea
      );
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
  };
}
