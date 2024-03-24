//min, max id фотограффии
const PHOTO_ID = {
  min: 1,
  max: 25
};
//min, max номер фото
const URL_NUMS = {
  min : 1,
  max : 25
};
//min, max id комментариея
const COMMENT_ID = {
  min : 1,
  max : 9999
};
//min, max номер  фото пользователя
const AVATAR_NUMBER = {
  min : 1,
  max : 6
};
//min, max количества лайков под фото
const NUMBER_OF_LIKES = {
  min : 15,
  max : 200
};
//min, max количества лайков под фото
const NUMBER_OF_COMMENTS = {
  min : 0,
  max : 30
};
//длинна массива сгенерированных объектов с миниатюрами
const NUMBER_OF_THUMBNAILS = 25;

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

const COMMENTS_COUNT_SHOW = 5;

const MAX_HASHTAG_COUNT = 5;

const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должены быть уникальными',
  INVALID_PATTERN: 'Неправильнай хэштег'
};

export {
  PHOTO_ID, URL_NUMS,
  COMMENT_ID, AVATAR_NUMBER,
  NUMBER_OF_LIKES, NUMBER_OF_COMMENTS,
  NUMBER_OF_THUMBNAILS, LIST_OF_NAMES,
  PHOTO_DESCRIPTION_LIST, LIST_OF_COMMENTS,
  COMMENTS_COUNT_SHOW, MAX_HASHTAG_COUNT,
  VALID_SIMBOLS, ErrorText
};
