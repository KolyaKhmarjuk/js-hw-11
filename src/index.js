import { fetchGalley } from './api/api';
import { markupList } from './markup/markupListGallery';
import { refs } from './refs';
import Notiflix from 'notiflix';

let page = 1;

const onSearch = e => {
  e.preventDefault();
  const input = e.currentTarget.searchQuery.value;

  console.log(input);
};

refs.form.addEventListener('submit', onSearch);
