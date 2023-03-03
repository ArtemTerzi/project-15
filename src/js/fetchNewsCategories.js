import { options } from './refs.js';
import axios from 'axios';
const { API_KEY } = options;
const NEWS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;

function fetchNewsCategories() {
  return axios.get(`${NEWS_URL}`).then(answer => {
    const {
      data: { results },
    } = answer;
    console.log(results);
    const allCategories = getCategories(results); // Возвращает массив категорий который будут идти в разметке Хедера, не делал маркап так как им занимается Антон.
  });
}

function getCategories(arr) {
  return arr.map(res => res.section);
}
