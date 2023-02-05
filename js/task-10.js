function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;
let size = 30;
const increment = 10;
const containerEl = document.querySelector('#boxes');

const createBoxes = amount => {
  let boxes = '';
  const makeBoxEl = (amount, callback) => {
    if (amount-- <= 0) {
      if (boxes) containerEl.insertAdjacentHTML('beforeend', boxes);
      return;
    }
    boxes += `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += increment;
    makeBoxEl(amount, makeBoxEl);
  };
  makeBoxEl(amount);
};

const destroyBoxes = () => {
  amount = 0;
  size = 30;
  document.querySelector('[type="number"]').value = containerEl.innerHTML = '';
};

const eventListener = ({ elem, eventName, eventFunc }) => {
  document.querySelector(elem).addEventListener(eventName, eventFunc);
};

eventListener({
  elem: '[type="number"]',
  eventName: 'input',
  eventFunc: event => {
    amount = Number(event.currentTarget.value);
  },
});

eventListener({
  elem: '[data-create]',
  eventName: 'click',
  eventFunc: () => createBoxes(amount),
});

eventListener({
  elem: '[data-destroy]',
  eventName: 'click',
  eventFunc: destroyBoxes,
});
