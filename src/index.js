import { fetchGalley } from './api/api';
import { markupList } from './markup/markupListGallery';
import { refs } from './refs';
import Notiflix from 'notiflix';

const onSearch = e => {
  e.preventDefault();
  const input = e.currentTarget.searchQuery.value;

  fetchGalley(input).then(response => renderImageList(response));
};

const renderImageList = response => {
  const markup = getMarkupImage(response);
  refs.galerry.innerHTML = markup;
};

const getMarkupImage = response => {
  return response.hits
    .map(
      ({ likes, tags, views, comments, downloads, webformatURL }) =>
        `<div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${downloads}</b>
        </p>
      </div>
    </div>`
    )
    .join('');
};

refs.form.addEventListener('submit', onSearch);
