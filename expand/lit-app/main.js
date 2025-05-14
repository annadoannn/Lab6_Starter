import './recipe-card.js';

const form = document.getElementById('new-recipe');
const main = document.querySelector('main');
const clearButton = document.querySelector('form button.danger');

/**
 * Save recipes to localStorage as a string
 */
function saveRecipesToStorage(recipes) {
  localStorage.setItem('lit-recipes', JSON.stringify(recipes));
}

/**
 * Load recipes from localStorage, or return an empty array
 */
function getRecipesFromStorage() {
  return JSON.parse(localStorage.getItem('lit-recipes')) || [];
}

/**
 * Create and display a <recipe-card> element using data
 */
function addRecipeToPage(recipe) {
  const card = document.createElement('recipe-card');

  // Assign all the data fields as properties
  for (const key in recipe) {
    card[key] = recipe[key];
  }

  main.appendChild(card);
}

// Load saved recipes on startup
getRecipesFromStorage().forEach(addRecipeToPage);

/**
 * Handle form submission
 */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const recipeObject = {};

  // Dynamically copy form data to recipeObject
  for (const [key, value] of formData.entries()) {
    recipeObject[key] = value;
  }

  // Add to page
  addRecipeToPage(recipeObject);

  // Save to localStorage
  const recipes = getRecipesFromStorage();
  recipes.push(recipeObject);
  saveRecipesToStorage(recipes);

  form.reset(); // Clear the form
});

/**
 * Handle clear button
 */
clearButton.addEventListener('click', () => {
  localStorage.clear();
  main.innerHTML = '';
});
