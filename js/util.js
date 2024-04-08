import { REMOVE_MESSAGE_TIMEOUT, DEBOUNCE_DELAY } from './constants.js';

// //Проверит, действительно ли была нажата клавиша 'Escape'
export const isEscapeKey = (evt) => evt.key === 'Escape';

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showErrorMessage = () => {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

export const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export const SortFunctions = {
  RANDOM: () => 0.5 - Math. random (),
  DISCUSSED: (a, b) => b. comments. length - a. comments. length
};
