import { getMarkupError } from './error';
import { isFavoriteForStyle, isReadForStyle } from './favoriteReadStyles';
import { getMarkup } from './fetches/getMarkup';
import { refs } from './refs';
import { onSearchFilter } from './inputFilterFunc';

// =======================  FOR TEST ==============================

// const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
// const btnFetch = document.querySelector('.test-fetch');

// btnFetch.addEventListener('click', onOpenNews);

// async function onFetch() {
//   try {
//     const response = await fetch(URL);
//     const newsAll = await response.json();
//     return newsAll;
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function onOpenNews() {
//   try {
//     const newsAll = await onFetch();
//     makeNews(newsAll.response.docs);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function makeNews(arrNews) {
//   try {
//     const markapNews = arrNews
//       .map(
//         ({ headline, web_url, pub_date, snippet, multimedia, keywords, section }) =>
//           `<li class="news-item ${isReadForStyle(web_url)}">
//           <p class="home__list-section">${section}</p>
//         <img class="home__list-img" src="https://www.nytimes.com/${
//           multimedia[2].url
//         }" alt="${keywords[0].value}">
//         <div class="news-item__buttons">
//          <button type="button" class="news-item__btn">Add to favorite</button>
//          <button type="button" class="news-item__category">Job searching </button>
//         </div>
//         <div class="news-item__wrapper-text">
//           <h2 class="home__list-title">${headline.main}</h2>
//           <p class="home__list-text">${snippet}</p>
//         </div>
//         <div class="news-item__wrapper-date">
//           <p class="home__list-date">${
//             new Date(pub_date).toLocaleString().split(',')[0]
//           }</p>
//           <a href="${web_url}" class="home__list-link">Read more</a>
//         </div>
//         </li>`
//       )
//       .join('');
//     listNews.insertAdjacentHTML('beforeend', markapNews);
//   } catch (err) {
//     const markapNews = arrNews
//       .map(
//         ({ headline, web_url, pub_date, snippet, multimedia, keywords, section }) =>
//           `<li class="news-item ${isReadForStyle(web_url)}">
//           <p class="home__list-section">${section}</p>
//         <img class="home__list-img" src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg" alt="${
//           keywords[0].value
//         }">
//         <div class="news-item__buttons">
//          <button type="button" class="news-item__btn">Add to favorite</button>
//          <button type="button" class="news-item__category">Job searching </button>
//         </div>
//         <div class="news-item__wrapper-text">
//           <h2 class="home__list-title">${headline.main}</h2>
//           <p class="home__list-text">${snippet}</p>
//         </div>
//         <div class="news-item__wrapper-date">
//           <p class="home__list-date">${
//             new Date(pub_date).toLocaleString().split(',')[0]
//           }</p>
//           <a href="${web_url}" class="home__list-link">Read more</a>
//         </div>
//         </li>`
//       )
//       .join('');
//     listNews.insertAdjacentHTML('beforeend', markapNews);
//   };
// };

// =======================  FOR TEST ==============================

// const KEY_LOCAL_STORAGE = 'read-news-local-storage';
// const listNews = document.querySelector('.list-news');
// const btnReadPage = document.querySelector('.read-page');

const container = document.querySelector('main');
const listReadNews = document.querySelector('.readPage-list');

makeArrNewsForPageRead();

listReadNews.addEventListener('click', onBtnReadMore);

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

let list = document.querySelector('.read-page-list__list').children;

const removeClass = "weather-container";

for (let item of list) {
  if (item.classList.contains(removeClass)) {
    item.remove()
  }
}
