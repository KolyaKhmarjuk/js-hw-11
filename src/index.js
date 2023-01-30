import { refs } from './refs';
import ApiService from './api/api';
import { getMarkupImage } from './markup/markupListGallery';
import { Notify } from 'notiflix';

const apiService = new ApiService();

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  clearHitsList();
  apiService.query = e.currentTarget.elements.searchQuery.value;
  if (apiService.query === '') {
    return Notify.info('Enter something to search');
  }
  apiService.resetPage();
  apiService.fetchData().then(appendHitsMarkup);
}

function onLoadMore() {
  apiService.fetchData().then(appendHitsMarkup);
}

function appendHitsMarkup(hits) {
  refs.galerry.insertAdjacentHTML('beforeend', getMarkupImage(hits));
}

function clearHitsList() {
  refs.galerry.innerHTML = '';
}
