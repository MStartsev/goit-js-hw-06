function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const outputColorEl = document.querySelector('.color');

const getBodyColor = ({ buttonEl, outputColorEl, getColorFunc }) => {
  buttonEl.addEventListener('click', getNewColor);

  function getNewColor() {
    const color = getColorFunc();
    bodyEl.style.backgroundColor = color;
    outputColorEl.textContent = color;
  }
};

getBodyColor({
  buttonEl: buttonEl,
  outputColorEl: outputColorEl,
  getColorFunc: getRandomHexColor,
});
