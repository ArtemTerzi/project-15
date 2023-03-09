// Поиск по популярным новостям за 30(можно 1,7 или 30) дней (максимальное количество которое можно использовать,возвращает массив из 20 новостей)
import { options } from './refs.js';
import axios from 'axios';

const { API_KEY } = options;
const mostPopularUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
export function fetchMostPopular() {
  return axios.get(mostPopularUrl);
}
