const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '?key=33125565-bcbdb194cdd5c3277aaf5f84a&';
const PARAMS = 'image_type=photo&orientation=horizontal&safesearch=true&';
const PER_PAGE = 'per_page=40';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchData() {
    try {
      const res = await axios.get(
        `${BASE_URL}${KEY}q=${this.searchQuery}&${PARAMS}${PER_PAGE}&page=${this.page}`
      );
      this.page += 1;
      const data = res.data.hits;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }

    // console.log(this);
    // const URL = 'https://pixabay.com/api/';
    // const KEY = '?key=33125527-3d6befa9d5d1f6271bd5a7dac';
    // const PARAMS =
    //   '&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&';
    // const PER_PAGE = 'per_page=40';

    // return fetch(
    //   `${URL}${KEY}&q=${this.searchQuery}${PARAMS}${PER_PAGE}&page=${this.page}`
    // )
    //   .then(r => r.json())
    //   .then(data => {
    //     this.page += 1;

    //     return data.hits;
    //   });
  }

  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
