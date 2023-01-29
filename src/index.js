import { fetchData } from './api/api';
import { refs } from './refs';
import { getMarkupImage } from './markup/markupListGallery';
import Notiflix, { Notify } from 'notiflix';

// let page = 1;
// let limitPage = 40;
// const totalPage = 100 / limitPage;

const onSearch = async e => {
  e.preventDefault();
  const inputValue = e.currentTarget.searchQuery.value;

  const res = await fetchData(inputValue);
  const markup = getMarkupImage(res);
  refs.galerry.insertAdjacentHTML('beforeend', markup);

  if (markup.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    refs.galerry.innerHTML = '';
  }
};

refs.form.addEventListener('submit', onSearch);
