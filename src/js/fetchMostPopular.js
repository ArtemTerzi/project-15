// Поиск по популярным новостям за 30(можно 1,7 или 30) дней (максимальное количество которое можно использовать,возвращает массив из 20 новостей)
import { options } from './refs.js';
import axios from 'axios';
import { Paginator } from './paginator.js';
const { API_KEY } = options;
const mostPopularUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`;
function fetchMostPopular() {
  return axios.get(mostPopularUrl).then(response => {
    const {
      data: { results },
    } = response;
    const responseURL = response.config.url;
    const paginator = new Paginator();
    paginator.getURL(responseURL);
    paginator.getRespForPagination(responseURL);
    markupForMostPopular(results);
  });
}
// Приходит 20 новостей

function createDataObjectByFetchMostPopular(arr) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  const createObj = arr.map(news => {
    if (news.media.length === 0) {
      return [
        {
          img: `${defaultImg}`,
          title: `${news.title}`,
          text: `${createThreePoints(news.abstract)}`,
          date: `${convertoNormalDate(news.published_date)}`,
          link: `${news.url}`,
        },
      ];
    }
    return [
      {
        img: `${news.media[0]['media-metadata'][2].url}`,
        title: `${news.title}`,
        text: `${createThreePoints(news.abstract)}`,
        date: `${convertoNormalDate(news.published_date)}`,
        link: `${news.url}`,
      },
    ];
  });
  console.log(createObj);
}

function markupForMostPopular(arr) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  const markup = arr
    .map(news => {
      if (news.media.length === 0) {
        return `
    <li class="news-item">
  <img src="${defaultImg}" alt="${news.adx_keywords}" class="news-item__img"/> 
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
    <a href="${news.url}"class="news-item__link">Read more</a>
  </div>
</li>
`;
      }
      return `
    <li class="news-item">
  <img src="${news.media[0]['media-metadata'][2].url}" alt="${
        news.adx_keywords
      }" class="news-item__img" /> 
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
    <a href="${news.url}" class="news-item__link"">Read more</a>
  </div>
</li>
`;
    })
    .join('');
  //Добавить маркап
}

// Эта функция для того, что бы отобразить дату в нормальном виде как требует макет, так как приходит с каждых API разная.
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

export { fetchMostPopular };
