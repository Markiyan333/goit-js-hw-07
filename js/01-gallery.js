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
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div>`

    })
        .join("")
}


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
    return
    }

    const onImageClick = evt.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
<img src="${onImageClick}" width ="800" height ="600">`)

    instance.show()
    galleryContainer.addEventListener('keydown', evt => {
	if (evt.key === 'Escape') {
	instance.close()
	}
	})

}