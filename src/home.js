import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { fetchByChoosenCategories } from './js/fetchByCategories';
import { renderMarkupError } from './js/renderMarkupError';
// import './js/firebaseData';

const categoriesList = document.querySelector(".category-list");
const homeList = document.querySelector(".home__list");
const searchFormElem = document.querySelector('.header__form');

// const URL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&';


function renderByDefault() {
  fetchMostPopular()
    .then(response => {
      if (response.status != 200) throw new Error(response.status);
      const {
        data: { results },
      } = response;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);
      const paginator = new Paginator();
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
      const responseURL = answer.config.url;
      const paginator = new Paginator();
      const data = getNormalizeResponse(docs, responseURL);
      paginator.getRespForPagination(answer, responseURL, data);
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
  if (event.target.nodeName !== "LI") {
    return;
  }

  const category = event.target.textContent;

  fetchByChoosenCategories(category)
    .then(response => {
      const {
        data: { results },
      } = response;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
}

startWeather();

categoriesList.addEventListener("click", onSearchCatehories);
