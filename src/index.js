import { fetchGalley } from './api/api';
import { markupList } from './markup/markupListGallery';
import { refs } from './refs';
import Notiflix from 'notiflix';

const onSearch = e => {
  e.preventDefault();
  const input = e.currentTarget.searchQuery.value;

  fetchGalley(input);

  console.log(input);
};

// const renderListImage = res => {
//   const markup = markupList(res);
//   refs.galerry.insertAdjacentHTML = markup;
// };

refs.form.addEventListener('submit', onSearch);
