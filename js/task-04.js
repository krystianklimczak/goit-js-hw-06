let counterValue = 0;

const removeBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const addValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const removeValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

addBtn.addEventListener('click', addValue);
removeBtn.addEventListener('click', removeValue);
