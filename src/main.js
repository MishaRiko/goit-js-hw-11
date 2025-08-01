import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ------
const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  showLoader();
  clearGallery();

  try {
    const response = await getImagesByQuery(query);
    console.log('Full API response:', response); // Додайте це для дебагу

    if (!response.hits || response.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try another query!',
        position: 'topRight',
      });
      return;
    }

    createGallery(response.hits);
  } catch (error) {
    console.error('API Error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Try again later!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
