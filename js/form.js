const uploadInputElement = document.querySelector('.img-upload__input');
const imgEditirElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeImgEditorElement = imgEditirElement.querySelector('.img-upload__cancel');

//откроет редактор изображения если загружен файл
const willOpenImgEditot = (evt) => {
  const file = evt.target.files[0];
  if (file) {
    imgEditirElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onImgEditortKeydown);
  }
};

//закрывает окно с редактирования, убирает обработчк на "escape"
const hideImgEditor = () => {
  imgEditirElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEditortKeydown);
  uploadInputElement.reset();
};

//закроет окно, если нажат крестик
const onCloseImgEditorButtonClick = () => {
  hideImgEditor();
};

//закрое окно, если нажат "escape"
function onImgEditortKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideImgEditor();
  }
}


closeImgEditorElement.addEventListener('click', onCloseImgEditorButtonClick);
uploadInputElement.addEventListener('change', willOpenImgEditot);

