function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const boxOfBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
// console.log(destroyBtn);
// console.log(input);
let boxSize = 30;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxOfBoxes.append(box);
    boxSize = boxSize + 10;
  }
}

createBtn.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  while (boxOfBoxes.firstChild) {
    boxOfBoxes.removeChild(boxOfBoxes.lastChild);
  }
  boxSize = 30;
});
