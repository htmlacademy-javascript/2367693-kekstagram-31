const uploadInput = document.querySelector('.img-upload__input');
const imgEditir = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');

const willOpenImgEditot = (evt) => {
  const file = evt.target.files[0];
  if (file) {
    imgEditir.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
  }
};


uploadInput.addEventListener('change', willOpenImgEditot);

