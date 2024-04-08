import { ScaleControlNumbers } from './constants.js';

const previewContainerElement = document.querySelector('.img-upload__preview-container');
const scaleSmallerElement = previewContainerElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = previewContainerElement.querySelector('.scale__control--bigger');
const scaleValueElement = previewContainerElement.querySelector('.scale__control--value');
const imagePreviewElement = previewContainerElement.querySelector('.img-upload__preview img');

//уменьшит масштаб
const zoomOut = () => {
  let value;
  const scaleValue = parseInt(scaleValueElement.value, 10);//25,50,75,100
  if (scaleValue <= ScaleControlNumbers.MAX && scaleValue > ScaleControlNumbers.MIN) {
    value = scaleValue - ScaleControlNumbers.STEP;
    return value;
  } else {
    return scaleValue;
  }
};

//увеличит масштаб
const zoomIn = () => {
  let value;
  const scaleValue = parseInt(scaleValueElement.value, 10);
  if (scaleValue >= ScaleControlNumbers.MIN && scaleValue < ScaleControlNumbers.MAX) {
    value = scaleValue + ScaleControlNumbers.STEP;
    return value;
  } else {
    return scaleValue;
  }
};

const onClickScaleController = (evt) => {
  if (evt.target === scaleSmallerElement) {
    const zoomOutValue = zoomOut();
    imagePreviewElement.style.transform = `scale(${zoomOutValue / 100})`;
    scaleValueElement.value = `${zoomOutValue.toString()}%`;
  } else if (evt.target === scaleBiggerElement) {
    const zoomInValue = zoomIn();
    imagePreviewElement.style.transform = `scale(${zoomInValue / 100})`;
    scaleValueElement.value = `${zoomInValue.toString()}%`;
  }
};

const resetScale = () => {
  imagePreviewElement.style.transform = `scale(${ScaleControlNumbers.MAX / 100})`;
  previewContainerElement.addEventListener('click', onClickScaleController);
};

export { resetScale };
