import { refs } from './refs';
import ApiService from './api/api';

const apiService = new ApiService();

const onSearch = async e => {
  e.preventDefault();
  apiService.query = e.currentTarget.searchQuery.value;

  apiService.fetchData();
};

const onLoadMore = () => {
  apiService.fetchData();
}

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore)

