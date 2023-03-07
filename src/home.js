import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { fetchByChoosenCategories } from './js/fetchByCategories';

const categoriesList = document.querySelector(".category-list");
const homeList = document.querySelector(".home__list");

// const URL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&';


function renderByDefault() {
  fetchMostPopular().then(response => {
    const {
      data: { results },
    } = response;
    // homeList.children[0] = 
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