import { SERVER_URL, ServerRouts, HttpMethods, ValidationErrorText } from './constants.js';

const request = async (url, method = HttpMethods.GET, body = null) => {
  const respons = await fetch(url, { method, body });
  if (! respons.ok) {
    throw new Error(ValidationErrorText[method]);
  }

  return respons.json();
};

const loadPictures = async () => request(SERVER_URL + ServerRouts.GET_DATA);

const sendPicture = async (pictureData) => request(SERVER_URL + ServerRouts.SEND_DATA, HttpMethods.POST, pictureData);

export { loadPictures, sendPicture };
