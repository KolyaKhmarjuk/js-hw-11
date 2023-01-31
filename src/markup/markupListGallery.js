const getMarkupImage = hits => {
  const markupList = hits.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      };
    }
  );

  return markupList
    .map(
      ({
        likes,
        tags,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
      }) =>
        `<div class="photo-card">
        <a class="img_gallary" href="${largeImageURL}" src="${webformatURL}" alt="${tags}" loading="lazy" >   </a>
        <div class="info">
          <li class="info-item">
            <b>Likes</b>
            <p>${likes}</p>
          </li>
          <li class="info-item">
            <b>Views</b>
            <p>${views}</p>
          </p>
          <li class="info-item">
            <b>Comments</b>
            <p>${comments}</p>
          </li>
          <li class="info-item">
            <b>Downloads</b>
            <p>${downloads}</p>
          </li>
        </div>
      </div>`
    )
    .join('');
};

export { getMarkupImage };
