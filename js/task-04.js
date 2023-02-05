let counterValue = 0;
const writeValue = display => (display.textContent = counterValue);

const addEvent = ({ dataAction, container }) => {
  const display = container.querySelector('#value');
  const button = container.querySelector(`[data-action=${dataAction}]`);

  button.addEventListener('click', () => {
    counterValue += Number(button.textContent);
    writeValue(display);
  });
};

const getCounter = counter => {
  const container = document.querySelector(counter);

  addEvent({ dataAction: 'decrement', container: container });
  addEvent({ dataAction: 'increment', container: container });
};

getCounter('#counter');
