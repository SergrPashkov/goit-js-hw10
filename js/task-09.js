function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

buttonChangeColor.addEventListener("click", () => {
	colorText.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor(); 
});	









