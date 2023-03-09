import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { refs } from './js/refs';
import { fetchByChoosenCategories } from './js/fetchByCategories';
import { renderMarkupError } from './js/renderMarkupError';
import WeatherMarkupApi from './js/weather/waether-markup';
import onLike from './js/onLike';
// import './js/firebaseData';

const homeInner = document.querySelector('.home__inner');
const categoriesList = document.querySelector('.category-list');
const homeList = document.querySelector('.home__list');
const categoryOthers = document.querySelector('.category-others');
const paginator = new Paginator();

// homeInner.style.height = `${homeInner.style.height} - ${700}px`;
homeInner.getBoundingClientRect().height =
  homeInner.getBoundingClientRect().height - 700;
console.log(homeInner.getBoundingClientRect().height);

// homeInner.style.height = `${homeInner.scrollHeight} - ${700}px`;

// const URL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&';

function renderByDefault() {
  fetchMostPopular()
    .then(response => {
      if (response.status != 200) throw new Error(response.status);
      const {
        data: { results },
      } = response;
      const totalItems = response.data.num_results;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);

      if (totalItems === 0) {
        paginator.hide();
        throw new Error(response.status);
      }
      paginator.getRespForPagination(response, responseURL, data);
    })
    .catch(error => {
      console.error(error);
      renderMarkupError('.home__inner');
    });
}

renderByDefault();

// 		} = response;
// 	const responseURL = response.config.url;
// 	const paginator = new Paginator();
// 	paginator.getURL(responseURL);
// 	paginator.getRespForPagination(responseURL);
// 	const data = getNormalizeResponse(results, responseURL);
// 	list.insertAdjacentHTML("beforeend", getMarkup(data));
// });

function renderByInputAndDate() {
  fetchByInputSerchAndDate()
    .then(answer => {
      if (answer.status != 200) throw new Error(response.status);

      const {
        data: {
          response: { docs },
        },
      } = answer;
      const totalItems = answer.data.response.meta.hits;
      const responseURL = answer.config.url;
      const data = getNormalizeResponse(docs, responseURL);
      if (totalItems === 0) {
        paginator.hide();
        throw new Error(response.status);
      }
      paginator.getRespForPagination(responseURL, data);
    })
    .catch(error => {
      console.error(error);
      renderMarkupError('.home__inner');
    });
}

// renderByInputAndDate();

// 	} = answer;
// 	const responseURL = answer.config.url;
// 	const paginator = new Paginator();
// 	paginator.getURL(responseURL);
// 	paginator.getRespForPagination(responseURL);
// 	const data = getNormalizeResponse(docs, URL);
// 	// list.insertAdjacentHTML("beforeend", getMarkup(data))
// 	console.log(data);
// });

function onSearchCatehories(event) {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const category = event.target.textContent;

  fetchByChoosenCategories(category)
    .then(response => {
      const {
        data: { results },
      } = response;
      const totalItems = response.data.num_results;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);

      if (totalItems === 0) {
        paginator.hide();
        throw new Error(response.status);
      }
      paginator.getRespForPagination(response, responseURL, data);

      // weatherMarkupApi.getWeatherMurkup();
    })
    .catch(error => {
      console.log(error);
      renderMarkupError(homeList);
    });
}

// startWeather();

//! start new function for localStorage for read
homeList.addEventListener('click', onBtnReadMore);

function onBtnReadMore(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const newsCard = e.target.parentNode.parentNode;
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

  function createNewData() {
    return new Date(Date.now()).toLocaleString().split(',')[0];
  }

  if (!newsCard.classList.contains('isRead')) {
    newsCard.classList.add('isRead');
  }
}

categoriesList.addEventListener('click', onSearchCatehories);
categoryOthers.addEventListener('click', onSearchCatehories);
homeList.addEventListener('click', onLike);
