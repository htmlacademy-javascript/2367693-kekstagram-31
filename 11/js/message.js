import { isEscapeKey } from './util';
const successMessageElemebt = document.querySelector('#success').content.querySelector('.success');
const errorMassageElement = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

const onCloseButtonClick = () => {
  hideMessage();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  hideMessage();
}

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  element
    .querySelector(buttonClass)
    .addEventListener('click', onCloseButtonClick);
};

const showSuccessMessage = () => {
  showMessage(successMessageElemebt, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMassageElement, '.error__button');
};

export { showSuccessMessage, showErrorMessage };
