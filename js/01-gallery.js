import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

const imgup = galleryItems.map(
	({preview, original, description}) => `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img
		class="gallery__image" src="${preview}"
		data-source="${original}"
		alt="${description}"
	/>
	</a>
	</li>`
	).join('');

container.insertAdjacentHTML('beforeend', imgup);
container.addEventListener("click", onClick);

function onClick(evt) {
	
	evt.preventDefault();
	// blockStandartAction(evt);
	if (!evt.target.classList.contains("gallery__image")){
		return;
	}

console.dir(evt.target.dataset.source);

const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" width="800" height="600">
`);
instance.show();

document.addEventListener("keydown", (e) => {
	if (e.code == "Escape") {
		instance.close();
	}
});

}

