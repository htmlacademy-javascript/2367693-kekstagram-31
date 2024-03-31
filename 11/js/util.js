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

export { showErrorMessage, isEscapeKey };
