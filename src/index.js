import { refs } from './refs';
import ApiService from './api/api';
import { getMarkupImage } from './markup/markupListGallery';
import { Notify } from 'notiflix';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const apiService = new ApiService();

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  const { hits, totalHits } = await apiService.fetchData();

  if (hits.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    refs.loadMore.setAttribute('hidden', true);
  }

  if (hits.length > 1) {
    Notify.success(`Hooray! We found ${totalHits} images.`);
    refs.loadMore.removeAttribute('hidden');
  }

  clearHitsList();
  appendHitsMarkup(hits);
  apiService.resetPage();
}

async function onLoadMore() {
  const { hits } = await apiService.fetchData();
  apiService.incrementPage();
  appendHitsMarkup(hits);
  hitsAmount(hits);
}

function appendHitsMarkup(hits) {
  refs.galerry.insertAdjacentHTML('beforeend', getMarkupImage(hits));
}

function clearHitsList() {
  refs.galerry.innerHTML = '';
}

function hitsAmount(hits) {
  if (hits.length < 40) {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    refs.loadMore.setAttribute('hidden', true);
  }
}
