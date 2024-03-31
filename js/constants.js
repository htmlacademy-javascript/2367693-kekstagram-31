const COMMENTS_COUNT_SHOW = 5;

const MAX_HASHTAG_COUNT = 5;

const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должены быть уникальными',
  INVALID_PATTERN: 'Неправильнай хэштег'
};

export {
  COMMENTS_COUNT_SHOW,
  MAX_HASHTAG_COUNT,
  VALID_SIMBOLS, ErrorText
};
