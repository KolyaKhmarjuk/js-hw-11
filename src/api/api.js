import axios from 'axios';
export default class ApiService{
  constructor() {
    this.inputValue = '';
    this.page = 1;
   }
  
  fetchData() {

    const URL = 'https://pixabay.com/api/';
    const KEY = '?key=33125527-3d6befa9d5d1f6271bd5a7dac';
    const PARAMS =
  '&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&';
    const PER_PAGE = 'per_page=40';

    fetch(`${URL}${KEY}${PARAMS}${this.inputValue}${PER_PAGE}&page=${this.page}`)
    .then(r => r.json())
    .then(data => {
      this.page += 1;
    })
  }
  
  get query() {
    return this.inputValue;
  }
  set(newQuery) {
    this.inputValue = newQuery;
  }

}


