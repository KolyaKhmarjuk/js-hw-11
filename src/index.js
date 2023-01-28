import { fetchGalley } from './api/api';
import { refs } from './refs';
import Notiflix from 'notiflix';
import axios from 'axios';

const onSearch = e => {
  e.preventDefault();
  const input = e.currentTarget.searchQuery.value;

  const imagesArrays = fetchGalley(input);
  console.log(imagesArrays);
};

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '?key=33125527-3d6befa9d5d1f6271bd5a7dac&';

// const fetchData = search => {
//   return fetch(
//     `${BASE_URL}${KEY}q=${search}&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
//   ).then(respons => {
//     if (respons.ok) {
//       return respons.json();
//     }
//   });
// };

// const fetchGalley = search => fetchData(search);

// const onSearch = e => {
//   e.preventDefault();
//   const input = e.currentTarget.searchQuery.value;

//   fetchGalley(input).then(response => renderImageList(response));
// };

// const renderImageList = response => {
//   const markup = getMarkupImage(response);
//   refs.galerry.insertAdjacentHTML('beforeend', markup);
// };

// const getMarkupImage = response => {
//   return response.hits
//     .map(
//       ({ likes, tags, views, comments, downloads, webformatURL }) =>
//         `<div class="photo-card">
//       <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//       <div class="info">
//         <p class="info-item">
//           <b>Likes: ${likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views: ${views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments: ${comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads: ${downloads}</b>
//         </p>
//       </div>
//     </div>`
//     )
//     .join('');
// };

refs.form.addEventListener('submit', onSearch);
