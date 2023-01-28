import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=33125527-3d6befa9d5d1f6271bd5a7dac&';

async function fetchData(item) {
  const res = await axios(
    `q=${item}&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
  );

  return res;
}

const fetchGalley = item => fetchData(item);

export { fetchGalley };
