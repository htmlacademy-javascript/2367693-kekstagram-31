import { SERVER_URL, ServerRout, HttpMethod, ValidationErrorText } from './constants.js';

const request = async (url, method = HttpMethod.GET, body = null) => {
  const respons = await fetch(url, { method, body });
  if (! respons.ok) {
    throw new Error(ValidationErrorText[method]);
  }

  return respons.json();
};

const loadPictures = async () => request(SERVER_URL + ServerRout.GET_DATA);

const sendPicture = async (pictureData) => request(SERVER_URL + ServerRout.SEND_DATA, HttpMethod.POST, pictureData);

export { loadPictures, sendPicture };
