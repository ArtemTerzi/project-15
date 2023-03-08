import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { refs } from './js/refs';

const list = document.querySelector(".home__list");

const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&"
fetchMostPopular()
	.then(response => {
		const {
			data: { results },
			} = response;
		const responseURL = response.config.url;
		const paginator = new Paginator();
		paginator.getURL(responseURL);
		paginator.getRespForPagination(responseURL);
		const data = getNormalizeResponse(results, responseURL);
		list.insertAdjacentHTML("beforeend", getMarkup(data));
	});

fetchByInputSerchAndDate()
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
		const data = getNormalizeResponse(docs, URL);
		// list.insertAdjacentHTML("beforeend", getMarkup(data))
		console.log(data);
	});

startWeather();


list.addEventListener('click', onBtnReadMore);

function onBtnReadMore(e) {

	if (e.target.nodeName !== 'A') {
	  return;
	};
  
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
		for (let i = 0; i < newsAllLocalStorage.length; i += 1) {
			const news = newsAllLocalStorage[i];
			if (news.link === newsObj.link) {
				news.dateOfRead = createNewData();
			};
		};
  
		newsAllLocalStorage.push(newsObj);
		localStorage.setItem(
		  refs.KEY_LOCAL_STORAGE,
		  JSON.stringify(newsAllLocalStorage)
		);
	  }
	} catch (error) {
  
	  console.log(error);
	}
	function createNewData() {
		return new Date(Date.now()).toLocaleString().split(',')[0];
	  }
  };
  
