import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import searchImage from './js/pixabay-api.js';
import renderCards from './js/render-functions.js';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

formEl.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value.trim();

  if (inputValue === '') {
    galleryEl.innerHTML = '';
    return;
  }

  loader.style.display = 'block';

  searchImage(inputValue)
    .then(data => {
      if (!data.hits.length) {
        galleryEl.innerHTML = '';
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          class: `izi-toast`,
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: 'white',
          messageSize: '16',
          theme: 'dark',
        });
      } else {
        renderCards(data);
        gallery.refresh();
      }
    })
    .catch(console.log)
    .finally(() => {
      loader.style.display = 'none';
      form.reset();
    });
}

let gallery = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
