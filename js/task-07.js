const fontSizeControl = document.querySelector('#font-size-control');
const idText = document.querySelector('#text');

fontSizeControl.addEventListener("input", changeSlider);

function changeSlider() {
	idText.style.fontSize = `${fontSizeControl.value}px`;
	// console.dir(fontSizeControl.value);
}