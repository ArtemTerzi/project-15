import { getMarkupError } from './error';
import { isFavoriteForStyle, isReadForStyle } from './favoriteReadStyles';
import { getMarkup } from './fetches/getMarkup';
import { refs } from './refs';
import { onSearchFilter } from './inputFilterFunc';
import onLike from './onLike';
import { onSearchMarkup } from './fetchByInputAndDate';

const container = document.querySelector('main');
const listReadNews = document.querySelector('.readPage-list');

makeArrNewsForPageRead();

listReadNews.addEventListener('click', onBtnReadMore);
listReadNews.addEventListener('click', onLike);

function onBtnReadMore(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const newsCard = e.target.parentNode.parentNode;
  const newsObj = makeObjectNews(newsCard);

  try {
    const newsAllLocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (newsAllLocalStorage === null) {
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify([newsObj]));
      return;
    }

    if (newsAllLocalStorage !== null) {
      if (newsAllLocalStorage.every(news => news.link !== newsObj.link)) {
        newsAllLocalStorage.push(newsObj);
        localStorage.setItem(
          refs.KEY_LOCAL_STORAGE,
          JSON.stringify(newsAllLocalStorage)
        );
      }

      const newNewsAllLocalStorage = newsAllLocalStorage.reduce(
        (newArr, news) => {
          if (news.link === newsObj.link) {
            news.dateOfRead = createNewData();
            news.isRead = true;
          }
          newArr.push(news);
          return newArr;
        },
        []
      );
      localStorage.setItem(
        refs.KEY_LOCAL_STORAGE,
        JSON.stringify(newNewsAllLocalStorage)
      );
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = getMarkupError();
  }

  if (!newsCard.classList.contains('isRead')) {
    newsCard.classList.add('isRead');
  }
}

function makeObjectNews(newsCard) {
  const section = newsCard.querySelector('.home__list-section').textContent;
  const img = newsCard.querySelector('.home__list-img').src;
  const alt = newsCard.querySelector('.home__list-img').alt;
  const title = newsCard.querySelector('.home__list-title').textContent;
  const text = newsCard.querySelector('.home__list-text').textContent;
  const date = newsCard.querySelector('.home__list-date').textContent;
  const link = newsCard.querySelector('.home__list-link').href;
  const dateOfRead = createNewData();

  const newsObj = {
    section,
    img,
    alt,
    title,
    text,
    date,
    link,

    isRead: true,
    dateOfRead,
  };

  return newsObj;
}

function createNewData() {
  return new Date(Date.now()).toLocaleString().split(',')[0];
}

function makeArrNewsForPageRead() {
  try {
    const newsAllGetLocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    const arrNewsIsRead = newsAllGetLocalStorage.reduce((arrNews, news) => {
      if (news.isRead) {
        arrNews.push(news);
      }

      return arrNews;
    }, []);

    makeMarkapPageRead(arrNewsIsRead);
  } catch (error) {
    console.log(error);
    container.innerHTML = getMarkupError();
  }
}

function makeMarkapPageRead(arrayNewsRead) {
  const allDates = arrayNewsRead
    .flatMap(newsRead => newsRead.dateOfRead)
    .filter((date, idx, arr) => arr.indexOf(date) === idx);

  function makeArrNewsDate(date, arrNews) {
    const arrFilterDataNews = arrNews.filter(news => news.dateOfRead === date);
    return getMarkup(arrFilterDataNews);
  }

  const markapDatesRead = allDates
    .map(
      date =>
        `<li class="readPage-list__item">
        <h2 class="readPage-list__title">${date.replaceAll('.', '/')}</h2>
        <svg class="readPage-list__svg" aria-label="open news" width="15px" height="20px">
        <use href="/icons.adfc4680.svg#dilka-bottom"></use>
    </svg>
    <ul class="read-page-list__list">${makeArrNewsDate(
      date,
      arrayNewsRead
    )}</ul>
    </li>`
    )
    .join('');

  listReadNews.insertAdjacentHTML('beforeend', markapDatesRead);
}

listReadNews.addEventListener('click', openListsReadNews);

function openListsReadNews(e) {
  if (e.target.nodeName !== 'H2') {
    return;
  }

  const titleDate = e.target;
  titleDate.nextSibling.nextSibling.classList.toggle('visually-hidden');
}

function openListsReadNews(e) {
  if (e.target.nodeName !== 'H2') {
    return;
  }

  if (e.target.nodeName !== 'H2') {
    return;
  }

  const titleDate = e.target;
  titleDate.nextElementSibling.classList.toggle('is-open');
  titleDate.nextElementSibling.nextElementSibling.classList.toggle(
    'visually-hidden'
  );
}

export { onBtnReadMore, makeArrNewsForPageRead };

const checkData = {
  items: listReadNews,
  removeClass: 'weather-container',
  innerList: '.read-page-list__list',
};

function checkWeatherInReadPage({ items, removeClass, innerList }) {
  for (let list of items.children) {
    const innerItems = list.querySelector(innerList);
    for (let item of innerItems.children) {
      if (item.classList.contains(removeClass)) {
        item.remove();
      }
    }
  }
}

checkWeatherInReadPage(checkData);
