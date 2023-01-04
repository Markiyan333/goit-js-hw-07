import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imageGallery = createImageGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageGallery);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageGallery(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link"href="${original}">
 <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`

    })
        .join("")
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    }
new SimpleLightbox('.gallery a', {
	captionDelay: 250
})