import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { refs } from './refs';
import ApiService from './api/api';
import { getMarkupImage } from './markup/markupListGallery';
import { Notify } from 'notiflix';

const apiService = new ApiService();
const lightbox = new SimpleLightbox('.img_gallary');

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);
refs.loadMore.setAttribute('hidden', true);

async function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  const { hits, totalHits } = await apiService.fetchData();

  refs.galerry.innerHTML = '';

  if (hits.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  appendHitsMarkup(hits);
  refs.loadMore.removeAttribute('hidden');
  apiService.resetPage();
  lightbox.refresh();
  Notify.success(`Hooray! We found ${totalHits} images.`);

  amountHits(hits);
}

async function onLoadMore() {
  apiService.incrementPage();
  const { hits } = await apiService.fetchData();
  appendHitsMarkup(hits);
  lightbox.refresh();
  amountHits(hits);
}

function appendHitsMarkup(hits) {
  refs.galerry.insertAdjacentHTML('beforeend', getMarkupImage(hits));
}

function amountHits(hits) {
  if (hits.length < 40) {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    refs.loadMore.setAttribute('hidden', true);
    return;
  }
}

const { height: cardHeight } = document
  .querySelector('.gallery-list')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});
