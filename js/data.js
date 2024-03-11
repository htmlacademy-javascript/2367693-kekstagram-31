import {getRandomUniqueId, getRandomInteger, getRandomArrayElement} from './util.js';

//список имен пользователей
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

const randomUniquePhotoId = getRandomUniqueId(1, 25);
const randomUniqueUrlNums = getRandomUniqueId(1, 25);
const randomUniqueCommentId = getRandomUniqueId(1, 999);

//создаст объект для массива с комментариями к фото
const createCommentedObject = function () {
  return {
    id: randomUniqueCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(LIST_OF_COMMENTS),
    name: getRandomArrayElement(LIST_OF_NAMES),
  };
};

//создаст объект для массива с описанием фото
const createDescriptiveObject = function () {
  return {
    id: randomUniquePhotoId(),
    url: `photos/${randomUniqueUrlNums()}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION_LIST),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createCommentedObject),
  };
};

const descriptionArray = function () {
  Array.from({length: 25}, createDescriptiveObject);
};

export {descriptionArray};
