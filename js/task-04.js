const idValue = document.querySelector('#value');
let counterValue = Number(document.querySelector('#value').textContent)

const buttonMinus = document.querySelector('[data-action="decrement"]');
buttonMinus.addEventListener("click", () => {
	counterValue -= 1;
	idValue.innerHTML = counterValue;
});	

const buttonPlus = document.querySelector('[data-action="increment"]');
buttonPlus.addEventListener("click", () => {
	counterValue += 1;
	idValue.innerHTML = counterValue;
});



