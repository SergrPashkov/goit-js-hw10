const form = document.querySelector('.login-form');
const text1 = document.querySelector('.email');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	// console.dir(form.email.value)
	
	if (form.email.value === "" || form.password.value === "") {
		alert('Всі поля повинні бути заповнені')
	} else {
		
		const formElements = event.currentTarget.elements;
		console.log(formElements.email);
		console.log(formElements.email.name,":", formElements.email.value);
		console.log(formElements.password.name,":", formElements.password.value);

		form.reset();

		// const formData = new FormData(event.currentTarget);
		// formData.forEach((email, password) => {
		// 	console.log(' email: ', email);
		// 	console.log(' password: ', password);
		// });
		
		}
	
	
}
