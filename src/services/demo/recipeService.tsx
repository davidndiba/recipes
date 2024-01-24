// services/recipeService.ts
import axios from 'axios';

const API_KEY = 'e234220dbda64365b25b5fe09b8b83d3';

export async function fetchRecipes() {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}
