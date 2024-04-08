import { renderThumbnails } from './thumbnail.js';
import { showBigPicture } from './big-picture.js';
//находим контейнер
const containerElement = document.querySelector('.pictures');

const clearGallery = () => {
  containerElement.querySelectorAll('a.picture').forEach((item) => item.remove());
};
//подписываемся на событие в галлереи. Отрисуем галлерею при вызове
const renderGallery = (pictures) => {
  clearGallery();
  containerElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (! thumbnail) {
      return;
    }
    evt.preventDefault();
    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    showBigPicture(pictureData);
  });

  renderThumbnails(pictures, containerElement);
};

export { renderGallery };
