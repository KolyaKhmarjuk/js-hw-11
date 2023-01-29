import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '?key=33125527-3d6befa9d5d1f6271bd5a7dac';
const PARAMS =
  '&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&';
const PER_PAGE = 'per_page=40';

async function fetchData(inputValue) {
  try {
    const res = await axios.get(
      `${KEY}&q=${inputValue}${PARAMS}${PER_PAGE}&page=1`
    );
    const data = res.data.hits;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchData };
