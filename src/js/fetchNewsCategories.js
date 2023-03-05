import { options } from './refs.js';
import axios from 'axios';
const { API_KEY } = options;
const NEWS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;

async function fetchNewsCategories() {
  const response = await axios.get(NEWS_URL);
  const results = response.data.results;
  const allCategories = getCategories(results);
  return allCategories;
}

function getCategories(arr) {
  return arr.map(res => res.section);
}

export { fetchNewsCategories };