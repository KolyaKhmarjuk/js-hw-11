import { refs } from './refs';
import ApiService from './api/api';
import { getMarkupImage } from './markup/markupListGallery';

const apiService = new ApiService();

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

async function onSearch(e) {
  e.preventDefault();
  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.resetPage();
  apiService.fetchData().then(appendHitsMarkup);
}

function onLoadMore() {
  apiService.fetchData().then(appendHitsMarkup);
}

function appendHitsMarkup(data) {
  refs.galerry.insertAdjacentHTML('beforeend', getMarkupImage(data));
}
