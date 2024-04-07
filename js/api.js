import { SERVER_URL } from './constants.js';

const ServerRout = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [HttpMethod.GET]: 'Не удалось загрузить данные',
  [HttpMethod.POST]: 'Не удалось отправить форму',
};

const request = async (url, method = HttpMethod.GET, body = null) => {
  const respons = await fetch(url, { method, body });
  if (! respons.ok) {
    throw new Error(ErrorText[method]);
  }

  return respons.json();
};

const loadPictures = async () => request(SERVER_URL + ServerRout.GET_DATA);


const sendPicture = async (pictureData) => request(SERVER_URL + ServerRout.SEND_DATA, HttpMethod.POST, pictureData);

export { loadPictures, sendPicture };
