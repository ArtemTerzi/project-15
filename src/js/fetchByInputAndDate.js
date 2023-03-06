// Поиск происходит по дате и ключевому слову начальная дата и конечная дата совпадают так как по макету у нас поиск по дате, а не по диапазону дат.
import { options } from './refs.js';
import axios from 'axios';
import { Paginator } from './paginator.js';
import Notiflix from 'notiflix';
import  dateString from './categoryListMaker.js';
const { API_KEY } = options;
const NEWS_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;
// ----------------------------------search by date and input

const searchForm = document.querySelector('.header__form');
const span = document.querySelector('.calendar-date');
let query = '';

searchForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();
  const date = span.textContent.split('/').reverse().join('').toString();

  const { elements: { value } } = e.currentTarget;
  query = value.value.trim();
  console.log(query)
  if (query === '') {
    Notiflix.Notify.warning('Please enter request')
    return
  }
  fetchByInputSerchAndDate(query,date)
}
// ----------------------------------

const today = {
  todayDate: new Date(),
  date() {
    return this.todayDate.getDate().toString().padStart(2, 0);
  },
  month() {
    return (this.todayDate.getMonth() + 1).toString().padStart(2, 0);
  },
  year() {
    return this.todayDate.getFullYear().toString();
  },
};
const dayAwaliableForBackend = `${today.year()}${today.month()}${today.date()}`;

//Дата передается в виде строки 00000000. По порядку: где 0000 - год, 00- месяц , 00- день Например: 20210122
// Приходит 10 новостей
function fetchByInputSerchAndDate(query,date) {

  return axios
    .get(`${NEWS_URL}&q=${query}&begin_date=${date}&end_date=${date}`)
    .then(answer => {
      const {
        data: {
          response: { docs },
        },
      } = answer;
      const responseURL = answer.config.url;
      const paginator = new Paginator();
      paginator.getURL(responseURL);
      paginator.getRespForPagination(responseURL);
      markupForQuareByInput(docs);
    });
}

function markupForQuareByInput(arr) {
  const markup = arr
    .map(news => {
      const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
      const attachURL = `https://www.nytimes.com/`;

      if (news.multimedia[0] === undefined) {
        return `
          <li class="news-item">
       <img  src="${defaultImg}" alt="${
          news.adx_keywords
        }" class="news-item__img"/>;
          <div class="news-item__buttons">
         <button type="button" class="news-item__btn">Add to favorite</button>
         <button type="button" class="news-item__category">Job searching </button>
        </div>
        <div class="news-item__wrapper-text">
          <b class="news-item__title">${news.headline.main}</b>
          <p  class="news-item__text">${createThreePoints(news.snippet)}</p>
        </div>
        <div class="news-item__wrapper-date">
          <p class="news-item__date">${convertoNormalDate(news.pub_date)}</p>
          <a href="${news.web_url}" class="news-item__link">Read more</a>
        </div>
      </li>
      `;
      }
      return `
          <li class="news-item">
       <img  src="${attachURL}${news.multimedia[0].url}" alt="${
        news.adx_keywords
      }" class="news-item__img"/>;
            <div class="news-item__buttons">
         <button type="button" class="news-item__btn">Add to favorite</button>
         <button type="button" class="news-item__category">Job searching </button>
        </div>
        <div class="news-item__wrapper-text">
          <b class="news-item__title">${news.headline.main}</b>
          <p>${createThreePoints(news.snippet)}</p>
        </div>
        <div class="news-item__wrapper-date">
          <p class="news-item__date">${convertoNormalDate(news.pub_date)}</p>
          <a href="${news.web_url}" class="news-item__link">Read more</a>
        </div>
      </li>
      `;
    })
    .join('');
  return markup;
}

// Эта функция для того, что бы отобразить дату ввиде как требует макет, так как приходит с каждых API разная.
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

export { fetchByInputSerchAndDate };
