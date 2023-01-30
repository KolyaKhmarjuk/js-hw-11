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

  const { hits, totalHits } = await apiService.fetchData();
  
  appendHitsMarkup(hits);

  if (apiService.query === '') {
    refs.loadMore.setAttribute('hidden', true);
    return Notify.info('Enter something to search');
  }

  apiService.resetPage();

  refs.loadMore.removeAttribute('hidden');
  refs.loadMore.textContent = 'Загрузка...';

  setTimeout(() => {
    if (apiService.query.length > 1) {
    refs.loadMore.textContent = 'Load more';
  }
  }, 1000)
}

async function onLoadMore() {
  apiService.incrementPage();
  const { hits } = await apiService.fetchData();
  appendHitsMarkup(hits);
}

function appendHitsMarkup(hits) {
  refs.galerry.insertAdjacentHTML('beforeend', getMarkupImage(hits));
}

function clearHitsList() {
  refs.galerry.innerHTML = '';
}
