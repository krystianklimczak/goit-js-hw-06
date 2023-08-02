const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Create array of all created element
const ingredientsList = document.querySelector('#ingredients');

//
ingredients.forEach(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  ingredient.classList.add('item');
  ingredientsList.append(ingredient);
});
// Adding all elements from ingredientsArray into our DOM list
// ingredientsList.append(...ingredientsArray);
