const correctAmount = ({ input }) => {
  const inputEl = document.querySelector(input);
  const dataLength = Number(inputEl.dataset.length);

  inputEl.addEventListener('blur', () => {
    const inputValue = inputEl.value.trim() || 0;
    inputEl.value = inputValue;
    const inputValueLength = inputValue.length;

    if (inputValueLength >= dataLength) {
      inputEl.classList.contains('invalid')
        ? inputEl.classList.replace('invalid', 'valid')
        : inputEl.classList.add('valid');
      return;
    }

    inputEl.classList.contains('valid')
      ? inputEl.classList.replace('valid', 'invalid')
      : inputEl.classList.add('invalid');
  });
};

correctAmount({ input: '#validation-input' });
