const getCounter = counter => {
  let counterValue = 0;
  const container = document.querySelector(counter);
  const display = container.querySelector('#value');
  const writeValue = counterValue => (display.textContent = counterValue);
  const addEvent = ({ dataAction }) => {
    const button = container.querySelector(`[data-action=${dataAction}]`);
    button.addEventListener('click', () => {
      counterValue += Number(button.textContent);
      writeValue(counterValue);
    });
  };
  addEvent({ dataAction: 'decrement' });
  addEvent({ dataAction: 'increment' });
};

getCounter('#counter');
