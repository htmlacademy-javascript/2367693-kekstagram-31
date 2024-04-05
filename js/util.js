// //Проверит, действительно ли была нажата клавиша 'Escape'
const isEscapeKey = (evt) => evt.key === 'Escape';

const errorMessageTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const REMOVE_MESSAGE_TIMEOUT = 5000;

const showErrorMessage = () => {
  const errorElement = errorMessageTemplate.cloneNode(true);
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const DEBOUNCE_DELAY = 500;

const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { showErrorMessage, isEscapeKey, debounce};
