// const markupList = image => {
//   return image
//     .map(
//       ({
//         likes,
//         tags,
//         views,
//         comments,
//         downloads,
//         webformatURL,
//         largeImageURL,
//       }) =>
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
//     </div>;`
//     )
//     .join('');
// };

// const markupList = image => {
//   // const itemList = image.hits.map({
//   //   likes,
//   //   tags,
//   //   views,
//   //   comments,
//   //   downloads,
//   //   webformatURL,
//   //   largeImageURL,
//   // });

// const {
// likes,
// tags,
// views,
// comments,
// downloads,
// webformatURL,
// largeImageURL,
// } = image.map();

// return `<div class="photo-card">
//     <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Likes: ${likes}</b>
//       </p>
//       <p class="info-item">
//         <b>Views: ${views}</b>
//       </p>
//       <p class="info-item">
//         <b>Comments: ${comments}</b>
//       </p>
//       <p class="info-item">
//         <b>Downloads: ${downloads}</b>
//       </p>
//     </div>
//   </div>;`.join();

// const item = itemList.map(({}) => {
//   <div class="photo-card">
//     <img src="" alt="" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Likes</b>
//       </p>
//       <p class="info-item">
//         <b>Views</b>
//       </p>
//       <p class="info-item">
//         <b>Comments</b>
//       </p>
//       <p class="info-item">
//         <b>Downloads</b>
//       </p>
//     </div>
//   </div>;
// });
// };

export { markupList };
