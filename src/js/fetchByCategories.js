import { options } from './refs.js';
import axios from 'axios';
const { API_KEY } = options;

function fetchByChoosenCategories(category) {
  return axios
    .get(
      `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?api-key=${API_KEY}`
    )
    .then(response => {
      const {
        data: { results },
      } = response;
      console.log(results[0].des_facet[0]);
      markupForSearchByCategories(results);
    });
}

fetchByChoosenCategories('food');

function markupForSearchByCategories(arr) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  const markup = arr
    .map(news => {
      console.log(news);
      if (news.multimedia.length === 0) {
        return `
    <li class="news-item">
  <img src="${defaultImg}" alt="${news.des_facet[0]}" class="news-item__img"/> 
  <div class="news-item__buttons">
   <button type="button" class="news-item__btn">Add to favorite</button>
   <button type="button" class="news-item__category">Job searching </button>
  </div>
  <div class="news-item__wrapper-text">
    <b class="news-item__title">${news.title}</b>
    <p class="news-item__text">${createThreePoints(news.abstract)}</p>
  </div>
  <div class="news-item__wrapper-date">
    <p class="news-item__date">${convertoNormalDate(news.published_date)}</p>
    <a href="${news.url} class="news-item__link">Read more</a>
  </div>
</li>
`;
      }
      return `
    <li class="news-item">
  <img src="${news.multimedia[2].url}" alt="${comparedTagAltInImgOnNull(
        news
      )}" class="news-item__img" /> 
   <div class="news-item__buttons">
   <button type="button" class="news-item__btn">Add to favorite</button>
   <button type="button" class="news-item__category">Job searching </button>
  </div>
  <div class="news-item__wrapper-text">
    <b class="news-item__title>${news.title}</b>
    <p class="news-item__text">${createThreePoints(news.abstract)}</p>
  </div>
  <div class="news-item__wrapper-date">
    <p class="news-item__date">${convertoNormalDate(news.published_date)}</p>
    <a href="${news.url} class="news-item__link"">Read more</a>
  </div>
</li>
`;
    })
    .join('');
  console.log(markup);
  //Добавить маркап
}

function convertoNormalDate(element) {
  const date = new Date(element);
  return date.toLocaleDateString('en-GB');
}

function createThreePoints(str) {
  if (str.length > 110) {
    return str.slice(0, 110) + '...';
  }
  return str;
}
//comparedTagAltInImgOnNull
function comparedTagAltInImgOnNull(news) {
  if (
    news.des_facet === null ||
    news.des_facet === undefined ||
    news.des_facet.length === 0
  ) {
    return news.section;
  }
  return news.des_facet[0];
}
