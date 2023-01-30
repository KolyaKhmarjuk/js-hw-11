import axios from 'axios';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchData() {
    console.log(this);
    const URL = 'https://pixabay.com/api/';
    const KEY = '?key=33125527-3d6befa9d5d1f6271bd5a7dac';
    const PARAMS =
      '&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&';
    const PER_PAGE = 'per_page=40';

    fetch(
      `${URL}${KEY}&q=${this.searchQuery}${PARAMS}${PER_PAGE}&page${this.page}`
    )
      .then(r => r.json())
      .then(data => {
        this.page += 1;
      });
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
