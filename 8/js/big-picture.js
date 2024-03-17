import { isEscapeKey } from './util.js';
const COMMENTS_COUNT_SHOW = 5;

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const commentsListElement = bigPictureElement.querySelector('.social__comments');
const totalCommentCountElement = bigPictureElement.querySelector('.social__comment-total-count');
const shownCommentCountElement = bigPictureElement.querySelector('.social__comment-shown-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsCountShown = 0;
let comments = [];

const createComment = ({ avatar, message, name }) => {
  const newComment = commentElement.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

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

const onCommentsLoaderClick = () => renderComments();


const hidePicture = () => {
  commentsCountShown = 0;
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onClosePictureButtonClick = () => {
  hidePicture();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({ url, description, likes}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};


const showBigPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  comments = pictureData.comments;
  if (comments.length >= 0) {
    renderComments();
  }
  renderPicture(pictureData);
};

closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};
