const categories = document.querySelector('#categories');
let answer = `Number of categories: ${categories.childElementCount}\n\n`;

categories.querySelectorAll('.item').forEach(item => {
  answer += `Category: ${item.querySelector('h2').textContent}\nElements: ${
    item.querySelector('ul').childElementCount
  }\n\n`;
});

console.log(answer);
