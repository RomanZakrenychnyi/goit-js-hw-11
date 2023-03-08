import axios from 'axios';

export default async function fetchImages(value, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34195796-6d8ef92c294f12e249c52e8bf';
  const params = `key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${BASE_URL}?${params}`).then(response => response.data);
}