const form = document.querySelector('.login-form');

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const {email, password } = event.currentTarget.elements;
		if (email.value === "" || password.value === "") {
			alert('Всі поля повинні бути заповнені')
		} else {
			console.log({email: email.value, password: password.value});
			event.currentTarget.reset();
		}
});
