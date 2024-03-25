const ScaleControlNumbers = {
  min: 25,
  max: 100,
  step: 25,
};

const previewContainerElement = document.querySelector('.img-upload__preview-container');
const scaleSmallerElement = previewContainerElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = previewContainerElement.querySelector('.scale__control--bigger');
const scaleValueElement = previewContainerElement.querySelector('.scale__control--value');
const imagePreviewElement = previewContainerElement.querySelector('.img-upload__preview img');

//уменьшит масштаб
const zoomOut = () => {
  let value;
  const scaleValue = parseInt(scaleValueElement.value, 10);//25,50,75,100
  if (scaleValue <= ScaleControlNumbers.max && scaleValue > ScaleControlNumbers.min) {
    value = scaleValue - ScaleControlNumbers.step;
    return value;
  } else {
    return scaleValue;
  }
};

//увеличит масштаб
const zoomIn = () => {
  let value;
  const scaleValue = parseInt(scaleValueElement.value, 10);//25,50,75,100
  if (scaleValue >= ScaleControlNumbers.min && scaleValue < ScaleControlNumbers.max) {
    value = scaleValue + ScaleControlNumbers.step;
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
  imagePreviewElement.style.transform = `scale(${ScaleControlNumbers.max / 100})`;
  previewContainerElement.addEventListener('click', onClickScaleController);
};

export { resetScale };
