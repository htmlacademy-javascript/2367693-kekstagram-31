// import { arrayPhotos } from './data.js';
import { renderGallery } from './gallery.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';
import { configFilter } from './filters.js';
import './form.js';

const bootStrap = async () => {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
    configFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootStrap();
