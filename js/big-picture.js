import { isEscapeKey } from './util.js';
import { COMMENTS_COUNT_SHOW } from './constants.js';

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const commentsListElement = bigPictureElement.querySelector('.social__comments');
const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const shownCommentCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsCountShown = 0;//счётчик комментариев
let comments = [];//комментарии, найденные по id объекта события

//создает 1 комментарий
const createComment = ({ avatar, message, name }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};
//рендер комментариев
const renderComments = () => {
  commentsCountShown += COMMENTS_COUNT_SHOW;
  const fragment = document.createDocumentFragment();

  if (comments.length === 0) {
    commentsListElement.innerHTML = '';
    commentsLoaderElement.classList.add('hidden');
    shownCommentCountElement.textContent = comments.length;
    totalCommentCountElement.textContent = comments.length;
    return;
  }

  if (commentsCountShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentsListElement.innerHTML = '';
  commentsListElement.append(fragment);

  shownCommentCountElement.textContent = commentsCountShown;
  totalCommentCountElement.textContent = comments.length;
};

//вызовет рендер комментариев, если кнопка "загрузить" нажата
const onCommentsLoaderClick = () => renderComments();

//закрывает окно с большим изображением, убирает обработчк на "escape"
const hidePicture = () => {
  commentsCountShown = 0;
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

//закроет окно, если нажат крестик
const onClosePictureButtonClick = () => {
  hidePicture();
};

//закрое окно, если нажат "escape"
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
  }
}

//создает большое изображение
const renderBigPicture = ({ url, description, likes}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

//покажет большое изображение
const showBigPicture = (pictureData) => {
  if (pictureData) {
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    comments = pictureData.comments;
    if (comments.length >= 0) {
      renderComments();
    }
    renderBigPicture(pictureData);
  }
};

//подписались на событие по клику на крестик
closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);
//подписались на событие "загрузить"
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};
