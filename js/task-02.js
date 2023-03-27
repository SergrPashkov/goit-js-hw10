const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleIngredients = document.querySelector("#ingredients");

ingredients.forEach(item => {
  console.dir(item);
  const itemLi = document.createElement("li");
  itemLi.textContent = item;
  itemLi.classList = "item";
  titleIngredients.before(itemLi)
});

console.log(titleIngredients);

