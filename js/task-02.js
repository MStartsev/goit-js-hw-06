const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector('#ingredients').append(
  ...ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    return li;
  })
);
