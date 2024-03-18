//находим шаблон
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
//создает одну миниатюру
const createThumbnail = ({id, url, description, likes, comments}) => {
  const pictureTemplateElement = pictureTemplate.cloneNode(true);
  pictureTemplateElement.querySelector('.picture__img').src = url;
  pictureTemplateElement.querySelector('.picture__img').alt = description;
  pictureTemplateElement.querySelector('.picture__likes').textContent = likes;
  pictureTemplateElement.querySelector('.picture__comments').textContent = comments.length;
  pictureTemplateElement.dataset.thumbnailId = id;

  return pictureTemplateElement;
};

//Создаст 25 объектов по шаблону, запишет во фрагмент, отрисует при вызове
const renderThumbnails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.appendChild(fragment);
};

export { renderThumbnails };
