import {MAX_HASHTAG_COUNT, VALID_SIMBOLS, ErrorText} from './constants.js';
import { resetScale } from './scale.js';
import {
  init as initEffect,
  reset as resetEffect
} from './effect.js';
import { sendPicture } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { isEscapeKey } from './util.js';

const SubmitButtonCaption = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Опубликовать',
};

const bodyElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const cancelButtonElement = formElement.querySelector('.img-upload__cancel');
const fileFieldElement = formElement.querySelector('.img-upload__input');
const hashtagFieldElement = formElement.querySelector('.text__hashtags');
const commentFieldElement = formElement.querySelector('.text__description');
const submitButton = formElement.querySelector('.img-upload__submit');

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled
    ? SubmitButtonCaption.SUBMITTING
    : SubmitButtonCaption.IDLE;
};

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

//откроет редактор изображения если загружен файл
const showModal = () => {
  resetScale();
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
};

//закрывает окно с редактирования, убирает обработчк на "escape"
const hideModal = () => {
  resetEffect();
  pristine.reset();
  formElement.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SIMBOLS.test(tag));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isErrorMessageExists = () => Boolean(document.querySelector('.error'));

function onDocumentEscapeKeydown (evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorMessageExists()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = (evt) => {
  showModal(evt);
};

const sendForm = async (form) => {
  if (! pristine.validate()) {
    return;
  }
  try {
    toggleSubmitButton(true);
    await sendPicture(new FormData(form));
    toggleSubmitButton(false);
    hideModal();
    showSuccessMessage();
  } catch (error) {
    showErrorMessage();
    toggleSubmitButton(false);
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

pristine.addValidator(
  hashtagFieldElement,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagFieldElement,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

pristine.addValidator(
  hashtagFieldElement,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true
);

cancelButtonElement.addEventListener('click', onCancelButtonClick);
fileFieldElement.addEventListener('change', onFileInputChange);
formElement.addEventListener('submit', onFormSubmit);
initEffect();
