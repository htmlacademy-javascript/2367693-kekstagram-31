import { renderThumbnails } from './render.js';
import { showBigPicture } from './big-picture.js';
//находим контейнер
const container = document.querySelector('.pictures');

//подписываемся на событие в галлереи. Отрисуем галлерею при вызове
const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');

    if (! thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = +thumbnail.dataset.thumbnailId;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);

    showBigPicture(pictureData);
  });

  renderThumbnails(pictures, container);
};

export { renderGallery };
