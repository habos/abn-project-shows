<script setup lang="ts">
  import useRecipes from '@/composibles/recipes';
  import { computed } from '@vue/reactivity';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const { recipe, getRecipeDesc } = useRecipes();
  const route = useRoute();

  onMounted(() => {
    getRecipeDesc(route.params.id as string);
  });

  let ingredientCount = 1;
  let ingrediantKey = (count: number) => 'strIngredient' + count;
  let amountKey = (count: number) => 'strMeasure' + count;

  const ingredientArr = new Array();
  const ingredients = computed(() => {
    Object.keys(recipe.value).forEach(function (key) {
      if (key === ingrediantKey(ingredientCount) && recipe.value[key] !== '') {
        ingredientArr.push({
          name: recipe.value[key],
          amount: recipe.value[amountKey(ingredientCount)],
        });
        ingredientCount++;
      }
    });
    return ingredientArr;
  });

  const youtubeLink = computed(() => {
    return recipe.value.strYoutube
      ? recipe.value.strYoutube.replace('watch?v=', 'embed/')
      : '';
  });
</script>

<template>
  <div class="detailsBackground">
    <div class="detailsBox">
      <div class="textBox">
        <h1>{{ recipe.strMeal }}</h1>
        <h3>Ingredients</h3>
        <div
          class="ingredients"
          v-for="ingredient in ingredients"
          :key="ingredient.name"
        >
          <p>{{ ingredient.name }}</p>
          <p>{{ ingredient.amount }}</p>
        </div>
        <h3>Instructions</h3>

        <p class="instructions">
          <iframe
            class="video"
            width="245"
            height="135"
            :src="youtubeLink"
            frameborder="0"
            allowfullscreen
          >
          </iframe
          >{{ recipe.strInstructions }}
        </p>
      </div>
      <img class="image" :src="recipe.strMealThumb" alt="Meal Image" />
    </div>
  </div>
</template>

<style scoped>
  .detailsBackground {
    height: fit-content;
    background-color: #f8faf9;
    display: flex;
  }

  .detailsBox {
    height: fit-content;
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 3rem auto;
    box-shadow: 0 0 15px gray;
    border-radius: 15px;
    color: #005e5d;
  }

  .textBox {
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 50%;
  }

  img {
    margin: 8rem auto auto auto;
    width: 20rem;
    border-radius: 15px;
  }

  h3 {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }

  p {
    margin: 5px 0;
  }

  .ingredients {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dashed;
  }

  .instructions {
    text-align: justify;
  }

  .video {
    float: left;
    padding: 0 15px 10px 0;
  }
</style>
