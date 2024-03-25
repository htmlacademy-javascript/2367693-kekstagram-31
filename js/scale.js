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
  const scaleValue = scaleValueElement.value.parseInt();//25,50,75,100
  if (scaleValue <= ScaleControlNumbers.max && scaleValue > ScaleControlNumbers.min) {
    value = scaleValue - ScaleControlNumbers.step;
    return value;
  }
};

//увеличит масштаб
const zoomIn = () => {
  let value;
  const scaleValue = scaleValueElement.value.parseInt();//25,50,75,100
  if (scaleValue >= ScaleControlNumbers.min && scaleValue < ScaleControlNumbers.max) {
    value = scaleValue + ScaleControlNumbers.step;
    return value;
  }
};

const onClickScaleController = (evt) => {
  if (evt.target === scaleSmallerElement) {
    const zoomOutValue = zoomOut();
    imagePreviewElement.transform.scale = (zoomOutValue / 100);//<======!
    imagePreviewElement.value = `${zoomOutValue.toString()}%`;
  } else if (evt.target === scaleBiggerElement) {
    const zoomInValue = zoomIn();
    imagePreviewElement.transform.scale = (zoomInValue / 100);//<=======!
    imagePreviewElement.value = `${zoomInValue.toString()}%`;
  }
};

const resetScale = () => {
  imagePreviewElement.transform.scale = (ScaleControlNumbers.max / 100);//<========!
  previewContainerElement.addEventListener('click', onClickScaleController);
};

export { resetScale };
