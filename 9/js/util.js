//вернет случайное целое число в диапазоне от a до b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//вернет случайный элемент
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//вернет случайный, уникальный ID/URL в диапозоне от a до b
const getRandomUniqueId = (a, b) => {
  const arrayId = [];
  return function () {
    let randomIntegerId = getRandomInteger(a, b);
    if (arrayId.length >= (b - a + 1)) {
      return null;
    }
    while (arrayId.includes(randomIntegerId)) {
      randomIntegerId = getRandomInteger(a, b);
    }
    arrayId.push(randomIntegerId);
    return randomIntegerId;
  };
};

//Проверит, действительно ли была нажата клавиша 'Escape'
const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomArrayElement, getRandomUniqueId, getRandomInteger, isEscapeKey };
