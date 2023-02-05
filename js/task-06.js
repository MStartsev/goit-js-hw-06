const inputEl = document.querySelector('#validation-input');

const correctAmount = inputEl => {
  const dataLength = Number(inputEl.dataset.length);
  let classList = '';

  inputEl.addEventListener('blur', addCorrectClass);

  function addCorrectClass() {
    const inputValue = inputEl.value.replace(/\s/g, '') || '';

    inputEl.value = inputValue;

    const correctLength = inputValue.length === dataLength;
    const correctClass = correctLength ? 'valid' : 'invalid';

    if (!(classList === correctClass)) {
      inputEl.classList.add(correctClass);

      if (classList) inputEl.classList.remove(classList);
    }

    classList = correctClass;
  }
};

correctAmount(inputEl);
