import { fetchGalley } from './api/api';
import { getMarkupImage } from './markup/markupListGallery';
import { refs } from './refs';
import Notiflix from 'notiflix';

const onSearch = e => {
  e.preventDefault();
  const input = e.currentTarget.searchQuery.value;

  fetchGalley(input).then(response => renderImageList(response));
};

const renderImageList = response => {
  const markup = getMarkupImage(response);
  refs.galerry.insertAdjacentHTML('beforeend', markup);
};

refs.form.addEventListener('submit', onSearch);
