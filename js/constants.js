export const SERVER_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';


export const COMMENTS_COUNT_SHOW = 5;

export const MAX_HASHTAG_COUNT = 5;

export const VALID_SIMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

export const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должены быть уникальными',
  INVALID_PATTERN: 'Неправильнай хэштег'
};

export const Effects = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EffectsToFilter = {
  [Effects.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effects.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effects.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effects.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effects.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

export const EffectToSliderOptions = {
  [Effects.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effects.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effects.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effects.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effects.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effects.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

export const MAX_PICTURE_COUNT = 10;

export const SubmitButtonCaptions = {
  SUBMITTING: 'Отправляю...',
  IDLE: 'Опубликовать',
};

export const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

export const REMOVE_MESSAGE_TIMEOUT = 5000;

export const DEBOUNCE_DELAY = 500;
