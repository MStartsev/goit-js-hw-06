const inputFontSize = ({ control, text }) => {
  const controlEl = document.querySelector(control);
  const textEl = document.querySelector(text);
  textEl.style.fontSize = `${controlEl.value}px`;

  controlEl.addEventListener('input', () => {
    textEl.style.fontSize = `${controlEl.value}px`;
  });
};

inputFontSize({ control: '#font-size-control', text: '#text' });
