import axios from 'axios';
import Pagination from 'tui-pagination';
import {
  fetchByChoosenCategories,
  markupForSearchByCategories,
} from './fetchByCategories';
import { fetchByInputSerchAndDate } from './fetchByInputAndDate';
import { fetchMostPopular } from './fetchMostPopular';
import { getMarkup } from './fetches/getMarkup';
import { getNormalizeResponse } from './fetches/getNormalizeResponse';
import './fetchNewsCategories';
import { options } from './refs.js';
import { startWeather } from '../js/weather/weather';

/*
 fetchByInputAndDate 
 URL = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&
const responseURL = response.config.url;
const totalItems = response.data.response.meta.hits;
fetchByCategories
URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`
const responseURL = response.config.url;
const totalItems = response.data.num_results;
fetchMostPopular
URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`
const responseURL = response.config.url;
const totalItems = response.data.num_results;
fetchNewsCategories
URL =
  'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g';
  const responseURL = response.config.url;
const totalItems = response.data.num_results;
 */

const containerPagination = document.querySelector('.tui-pagination'); // to refs
const list = document.querySelector('.home__list');
export class Paginator {
  constructor() {
    this.URL = '';
    this.page = 1;
    this.totalItems = null;
    this.isSearchQuery = false;
    this.isCategorySearch = false;
    this.isMostPopularSearch = false;
    this.offset = null;
    this.itemsPerPage = 10;
    this.visiblePages = 1;
    this.container = list;
    this.data = [];
  }
  getRespForPagination(response, responseURL, data, results) {
    this.URL = responseURL;
    this.data = data;

    if (window.frames.innerWidth >= 320) this.visiblePages = 3;

    if (this.URL.includes('articlesearch')) this.isSearchQuery = true;
    if (this.URL.includes('v3/content/')) this.isCategorySearch = true;
    if (this.URL.includes('mostpopular/v2')) this.isMostPopularSearch = true;

    if (this.isSearchQuery) {
      this.totalItems = response.data.response.meta.hits;
      this.page = 1;
      this.checkNumItems();
      this.updatePageNumberToURL();
      this.makeFetchForSearchByQuery();
    } else if (this.isCategorySearch) {
      this.totalItems = response.data.num_results;
      this.page = 1;
      this.checkNumItems();
      this.makeFetchForSearhByCategory();
      this.updateURLWithOffset();
    } else if (this.isMostPopularSearch) {
      this.totalItems = response.data.num_results;
      this.page = 1;
      this.checkNumItems();
      this.makeFetchForSearhByPopular();
    }
    this.checkNumItems();

    this.initPagination(this.page);
  }

  updateURLWithOffset() {
    this.offset = this.itemsPerPage * (this.page - 1) + this.itemsPerPage;

    this.URL = this.URL.includes('&limit=')
      ? this.URL.substring(0, this.URL.search('&limit='))
      : (this.URL = this.URL);
    this.URL = this.URL + `&limit=${this.itemsPerPage}&offset=${this.offset}`;
  }

  checkNumItems() {
    if (this.totalItems <= this.itemsPerPage) this.hide();
  }

  async makeFetchForSearchByQuery() {
    await axios
      .get(this.URL)
      .then(answer => {
        const {
          data: {
            response: { docs },
          },
        } = answer;
        const responseURL = answer.config.url;
        this.data = getNormalizeResponse(docs, responseURL);
        this.container.innerHTML = getMarkup(this.data);
      })
      .then(startWeather);
  }

  async makeFetchForSearhByCategory() {
    await axios
      .get(this.URL)
      .then(response => {
        const {
          data: { results },
        } = response;
        this.URL = response.config.url;
        this.data = getNormalizeResponse(results, this.URL);
        this.container.innerHTML = getMarkup(this.data);
      })
      .then(startWeather);
  }

  async makeFetchForSearhByPopular() {
    await axios
      .get(this.URL)
      .then(response => {
        const {
          data: { results },
        } = response;
        this.URL = response.config.url;
        this.data = getNormalizeResponse(results, this.URL);
        this.container.innerHTML = getMarkup(
          this.data.splice(
            this.itemsPerPage * (this.page - 1),
            this.itemsPerPage
          )
        );
      })
      .then(startWeather);
  }

  show() {
    containerPagination.classList.remove('visually-hidden');
  }

  hide() {
    containerPagination.classList.add('visually-hidden');
  }

  getURL(URL) {
    this.URL = URL;
  }

  addPageNumberToURL() {
    this.URL = this.URL + `&page=${this.page}`;
  }
  clearPageNumberToURL() {
    this.URL = this.URL.includes('&page=')
      ? this.URL.substring(0, this.URL.search('&page='))
      : (this.URL = this.URL);
  }

  updatePageNumberToURL() {
    this.URL = this.URL.includes('&page=')
      ? this.URL.substring(0, this.URL.search('&page='))
      : (this.URL = this.URL);
    this.URL = this.URL + `&page=${this.page - 1}`;
  }

  changeCurrentPage(page) {
    this.page = page;
  }

  initPagination(page) {
    const paginationOptions = {
      totalItems: this.totalItems,
      page: page,
      itemsPerPage: this.itemsPerPage,
      visiblePages: this.visiblePages,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
    const pagination = new Pagination(containerPagination, paginationOptions);
    paginationOptions.page = pagination;
    pagination.on('afterMove', async event => {
      try {
        const { page } = event;
        this.page = pagination.getCurrentPage();

        if (this.isSearchQuery) {
          this.updatePageNumberToURL();
          this.makeFetchForSearchByQuery();
        } else if (this.isCategorySearch) {
          this.updateURLWithOffset(this.URL);
          this.makeFetchForSearhByCategory();
        } else if (this.isMostPopularSearch) {
          this.makeFetchForSearhByPopular();
        }
      } catch (err) {
        console.log(err);
      }
      return pagination;
    });

    pagination.on('afterMove', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
