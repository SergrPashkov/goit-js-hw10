import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector('.gallery');

const imgup = galleryItems.map(
	({preview, original, description}) => `
	<li class="gallery__item">
	<a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
</li>`
	).join('');

container.insertAdjacentHTML('beforeend', imgup);
container.addEventListener("click", onClick);

function onClick(evt) {
	evt.preventDefault();
	if (!evt.target.classList.contains("gallery__image")){
		return;
	}

const currentItem = galleryItems.find(({description}) => description === evt.target.alt)

new SimpleLightbox('.gallery__item a', {});

}