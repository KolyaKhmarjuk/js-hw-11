import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { refs } from './refs';
import ApiService from './api/api';
import { getMarkupImage } from './markup/markupListGallery';
import { Notify } from 'notiflix';

const lightbox = new SimpleLightbox('.img_gallary');
const apiService = new ApiService();

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);
refs.loadMore.setAttribute('hidden', true);

async function onSearch(e) {
  e.preventDefault();
  apiService.resetPage();
  refs.galerry.innerHTML = '';
  apiService.query = e.currentTarget.elements.searchQuery.value;
  const { hits, totalHits } = await apiService.fetchData();

  if (hits.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }

  appendHitsMarkup(hits);
  scrollByGallary(0);
  refs.loadMore.removeAttribute('hidden');

  lightbox.refresh();
  Notify.success(`Hooray! We found ${totalHits} images.`);

  amountHits(hits);
}

async function onLoadMore() {
  apiService.incrementPage();
  const { hits } = await apiService.fetchData();
  appendHitsMarkup(hits);
  scrollByGallary(1);
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

function scrollByGallary(number) {
  const { height: cardHeight } =
    refs.galerry.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * number,
    behavior: 'smooth',
  });
}
