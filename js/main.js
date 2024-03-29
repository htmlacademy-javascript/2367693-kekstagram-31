// import { arrayPhotos } from './data.js';
// import { renderGallery } from './gallery.js';
import { loadPictures } from './api.js';
import './form.js';

const bootStrap = async () => {
  const pictures = await loadPictures();
  // renderGallery(pictures);
  console.log(pictures);
};

bootStrap();
