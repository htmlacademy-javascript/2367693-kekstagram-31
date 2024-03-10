const LIST_OF_NAMES = [
  'Шуриком',
  'Гришей',
  'Владом',
  'Злодияр',
  'Ванила',
  'Зима',
  'Близко',
  'Галактион',
  'Агуша',
];

//список описаний к фото
const PHOTO_DESCRIPTION_LIST = [
  'со вкусом',
  'как на картинке',
  'прекрасно',
  'приятно',
  'ярко',
  'тонко',
  'превосходно',
  'искусно',
  'изящно',
];

//список комментариев к фото
const LIST_OF_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

//вернет случайное целое число в диапазоне от a до b
const getRandomInteger = function (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//вернет случайный элемент
const getRandomArrayElement = function (elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
};

//вернет случайный, уникальный ID/URL в диапозоне от a до b
const getRandomUniqueId = function (a, b) {
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

const randomUniquePhotoId = getRandomUniqueId(1, 25);
const randomUniqueUrlNums = getRandomUniqueId(1, 25);
const randomUniqueCommentId = getRandomUniqueId(1, 999);

//создаст объект для массива с комментариями к фото
const createCommentedObject = function () {
  return {
    id: randomUniqueCommentId(1,999),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(LIST_OF_COMMENTS),
    name: getRandomArrayElement(LIST_OF_NAMES),
  };
};

//создаст объект для массива с описанием фото
const createDescriptiveObject = function () {
  return {
    id: randomUniquePhotoId(1, 25),
    url: `photos/${randomUniqueUrlNums(1, 25)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION_LIST),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createCommentedObject),
  };
};

const descriptionArray = Array.from({length: 25}, createDescriptiveObject);
console.log(descriptionArray);
