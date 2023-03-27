const listCategories = document.querySelector('#categories');

console.log(`Number of categories: ${listCategories.children.length}` ) ;

const categoriesItem = document.querySelectorAll('li.item');

categoriesItem.forEach(function (item) {
	console.dir(`\nCategory: ${item.children[0].textContent}`);
	console.dir(`Elements: ${item.children[1].children.length} `);
});







