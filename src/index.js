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
    refs.loadMore.setAttribute('hidden', true);
    return Notify.info('Enter something to search');
  }

  const data = apiService.fetchData();
  
  apiService.resetPage();
  apiService.fetchData().then(appendHitsMarkup);

  refs.loadMore.removeAttribute('hidden');
  refs.loadMore.textContent = 'Загрузка...';

  setTimeout(() => {
    if (apiService.query.length > 1) {
    refs.loadMore.textContent = 'Load more';
  }
  }, 1000)
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
