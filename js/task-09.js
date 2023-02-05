function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const getBodyColor = ({ buttonEl, outputColorEl, getColorFunc }) => {
  const bodyRef = document.querySelector('body');
  const buttonRef = document.querySelector(buttonEl);
  const outputColorRef = document.querySelector(outputColorEl);

  buttonRef.addEventListener('click', getNewColor);

  function getNewColor() {
    const color = getColorFunc();
    bodyRef.style.backgroundColor = color;
    outputColorRef.textContent = color;
  }
};

getBodyColor({
  buttonEl: '.change-color',
  outputColorEl: '.color',
  getColorFunc: getRandomHexColor,
});
