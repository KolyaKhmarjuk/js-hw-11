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
      const response = await axios.get(
        `${BASE_URL}${KEY}q=${this.searchQuery}&${PARAMS}${PER_PAGE}&page=${this.page}`
      );
      
      const data = response.data;
      console.log(data);
      return data;
      
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
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
