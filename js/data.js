// import { getRandomUniqueId, getRandomInteger, getRandomArrayElement } from './util.js';
// import {
//   PHOTO_ID, URL_NUMS,
//   COMMENT_ID, AVATAR_NUMBER,
//   NUMBER_OF_LIKES, NUMBER_OF_COMMENTS,
//   NUMBER_OF_THUMBNAILS, LIST_OF_NAMES,
//   PHOTO_DESCRIPTION_LIST, LIST_OF_COMMENTS
// } from './constants.js';

// const randomUniquePhotoId = getRandomUniqueId(PHOTO_ID.min, PHOTO_ID.max);
// const randomUniqueUrlNums = getRandomUniqueId(URL_NUMS.min, URL_NUMS.max);
// const randomUniqueCommentId = getRandomUniqueId(COMMENT_ID.min, COMMENT_ID.max);

// //создаст объект для массива с комментариями к фото
// const createCommentedObject = () => ({
//   id: randomUniqueCommentId(),
//   avatar: `img/avatar-${getRandomInteger(AVATAR_NUMBER.min, AVATAR_NUMBER.max)}.svg`,
//   message: getRandomArrayElement(LIST_OF_COMMENTS),
//   name: getRandomArrayElement(LIST_OF_NAMES),
// });

// //создаст объект для массива с описанием фото
// const createDescriptiveObject = () => ({
//   id: randomUniquePhotoId(),
//   url: `photos/${randomUniqueUrlNums()}.jpg`,
//   description: getRandomArrayElement(PHOTO_DESCRIPTION_LIST),
//   likes: getRandomInteger(NUMBER_OF_LIKES.min, NUMBER_OF_LIKES.max),
//   comments: Array.from({length: getRandomInteger(NUMBER_OF_COMMENTS.min, NUMBER_OF_COMMENTS.max)}, createCommentedObject),
// });

// // вернет массив из NUMBER_OF_THUMBNAILS-(25) объектов с фото
// const getPhotosArray = () => Array.from({length: NUMBER_OF_THUMBNAILS}, createDescriptiveObject);

// //записали 25 объектов с фото в массив
// const arrayPhotos = getPhotosArray();

// export { arrayPhotos };
