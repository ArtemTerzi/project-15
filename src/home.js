import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { fetchByChoosenCategories } from './js/fetchByCategories';

const searchFormElem = document.querySelector(".header__form");

// const URL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&';

function renderByDefault() {
  fetchMostPopular().then(response => {
    const {
      data: { results },
    } = response;
    const responseURL = response.config.url;
    const data = getNormalizeResponse(results, responseURL);
    const paginator = new Paginator();
    paginator.getRespForPagination(response, responseURL, data);
  });
}

// renderByDefault();

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
      const {
        data: {
          response: { docs },
        },
      } = answer;
      // const responseURL = answer.config.url;
      // const paginator = new Paginator();
      // const data = getNormalizeResponse(docs, responseURL);
      // paginator.getRespForPagination(answer, responseURL, data);
    });
}

renderByInputAndDate();

// 	} = answer;
// 	const responseURL = answer.config.url;
// 	const paginator = new Paginator();
// 	paginator.getURL(responseURL);
// 	paginator.getRespForPagination(responseURL);
// 	const data = getNormalizeResponse(docs, URL);
// 	// list.insertAdjacentHTML("beforeend", getMarkup(data))
// 	console.log(data);
// });

// startWeather();


function onSubmitSearchForm(event) {
  event.preventDefault();
  const inputSaerch = event.currentTarget.elements.search.value;

  fetchByChoosenCategories(inputSaerch)
    .then(response => {
      const {
        data: { results },
      } = response;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);
      console.log(data);
    });
}

searchFormElem.addEventListener("submit", onSubmitSearchForm);