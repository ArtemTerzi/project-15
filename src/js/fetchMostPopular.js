import { options } from './refs.js';
import axios from 'axios';

const { API_KEY } = options;
const mostPopularUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
export function fetchMostPopular() {
  return axios.get(mostPopularUrl);
}
