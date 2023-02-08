import { ref, type Ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const http = axios.create({
  baseURL: 'https://www.themealdb.com',
});

const recipe: any = ref([]);
const recipes: Ref<any[]> = ref([]);

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

  return {
    recipe,
    recipes,
    getRandomRecipe,
    getSearchedRecipes,
    getRecipeDesc,
  };
}
