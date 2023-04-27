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
	if (evt.target.nodeName !== 'IMG'){
		return;
	}
	const instance = basicLightbox.create(`
		<img src="${evt.target.dataset.source}" width="800" height="600">
	`, {
		onShow: () => {window.addEventListener('keydown', keyPressEsc)},
		onClose: () => {window.removeEventListener('keydown', keyPressEsc)},
	});

	function keyPressEsc(e) {
		if (e.code !== "Escape") {
			return;
		}
		instance.close();
	}
	instance.show();
}