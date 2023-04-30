const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleIngredients = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
const itemLi = document.createElement("li");
  itemLi.textContent = option;
  itemLi.classList.add("item");
  return itemLi;
})
titleIngredients.append(...elements);
