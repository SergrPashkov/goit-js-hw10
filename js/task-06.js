const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
	console.log(textInput.dataset.length)
	if (textInput.value.length === Number(textInput.dataset.length)) {
		textInput.classList.remove('invalid')
		textInput.classList.add('valid')
	// console.log(textInput.dataset.length)
	} else {
	// console.log(textInput.value.length)
	textInput.classList.remove('valid')
	textInput.classList.add('invalid')
		}

});

