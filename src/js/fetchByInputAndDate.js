// Поиск происходит по дате и ключевому слову начальная дата и конечная дата совпадают так как по макету у нас поиск по дате, а не по диапазону дат.
import { options } from './refs.js';
import axios from 'axios';
import { Paginator } from './paginator.js';
import Notiflix from 'notiflix';
import  dateString from './categoryListMaker.js';
const { API_KEY } = options;
const NEWS_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;
//! ----------------------------------search by date and input

const searchForm = document.querySelector('.header__form');
const span = document.querySelector('.calendar-date');
let query = '';

searchForm.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();
  const date = span.textContent.split('/').reverse().join('').toString();

  const { elements: { search } } = e.currentTarget;
  query = search.value.trim();
  console.log(query)
  if (query === '') {
    Notiflix.Notify.warning('Please enter request')
    return
  }
  fetchByInputSerchAndDate(query,date)
}
//! ----------------------------------

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
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&"

//Дата передается в виде строки 00000000. По порядку: где 0000 - год, 00- месяц , 00- день Например: 20210122
// Приходит 10 новостей

export function fetchByInputSerchAndDate(
  query = 'Ukraine',
  date = dayAwaliableForBackend
) {
  return axios.get(`${NEWS_URL}&q=${query}&begin_date=${date}&end_date=${date}`);
}
