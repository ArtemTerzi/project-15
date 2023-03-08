import { options } from './refs.js';
import axios from 'axios';
const { API_KEY } = options;

export async function fetchByChoosenCategories(category) {
  return axios
    .get(
      `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?api-key=${API_KEY}`
  )
}