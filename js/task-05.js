const nameInput = ({ input, output }) => {
  const inputEl = document.querySelector(input);
  const outputEl = document.querySelector(output);
  const defaultText = outputEl.textContent;

  inputEl.addEventListener('input', () => {
    const value = inputEl.value.trimStart();
    inputEl.value = value;
    outputEl.textContent = value || defaultText;
  });
};

nameInput({ input: '#name-input', output: '#name-output' });
