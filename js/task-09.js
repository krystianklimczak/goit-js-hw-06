function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const siteBody = document.querySelector('body');
const paragraphOfColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  siteBody.style.backgroundColor = color;
  paragraphOfColor.textContent = color;
}
