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
    this.totalItems = 10;
    this.isSearchQuery = false;
    this.itemsPerPage = 10;
    this.visiblePages = 3;
    this.container = list;
    this.data = [];
  }
  getRespForPagination(response, responseURL, data) {
    this.URL = responseURL;
    console.log(responseURL);
    this.data = data;
    console.log(data);

    if (this.URL.includes('articlesearch')) this.isSearchQuery = true;
    if (window.frames.innerWidth <= 320) this.visiblePages = 1;

    if (this.isSearchQuery) {
      this.totalItems = response.data.response.meta.hits;
      const docs = response.data.response.docs;
      const normalized = getNormalizeResponse(docs, responseURL);
      this.container.innerHTML = getMarkup(normalized);

      this.clearPageNumberToURL();
      this.addPageNumberToURL();
      // } else if (this.URL.includes('mostpopular/v2/viewed/')) {
      //   this.hide();
    } else {
      this.totalItems = response.data.num_results;
      this.container.innerHTML = getMarkup(
        data.slice(this.page, this.page + this.itemsPerPage)
      );
    }

    if (this.totalItems <= 10) this.hide();
    this.initPagination(this.page);
  }

  forMobile() {
    if (window.frames.innerWidth <= 320) this.visiblePages = 1;
  }

  show() {
    containerPagination.removeClassList('visually-hidden');
  }

  hide() {
    containerPagination.addClassList('visually-hidden');
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
    this.URL = this.URL.includes('page=')
      ? this.URL.substring(0, this.URL.search('&page='))
      : (this.URL = this.URL);
    this.URL = this.URL + `&page=${this.page}`;
  }

  changeCurrentPage(page) {
    this.page = page;
  }

  initPagination(page) {
    const paginationOptions = {
      totalItems: this.totalItems,
      page: this.page,
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
        this.updatePageNumberToURL(page);
        this.container.innerHTML = getMarkup(
          this.data.splice(this.page, this.page + this.itemsPerPage)
        );
        if (this.isSearchQuery) {
          this.clearPageNumberToURL(page);
          this.addPageNumberToURL(page);
          await axios.get(this.URL).then(answer => {
            const {
              data: {
                response: { docs },
              },
            } = answer;
            // const responseURL = answer.config.url;
            // const data = getNormalizeResponse(docs, responseURL);
            // this.container.innerHTML = '';
            // this.container.innerHTML = getMarkup(data);
          });
        } else {
          // const data = getNormalizeResponse(results, responseURL);
        }
      } catch (err) {
        console.log(err);
      }
      return pagination;
    });
  }
}

// const paginator = new Paginator();
// paginator.getRespForPagination();
