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
// const ENDPOINT_URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
// const ENDPOINT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&`;
// const ENDPOINT_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
// const ENDPOINT_URL =
//   'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g';
export class Paginator {
  constructor() {
    this.page = 1;
    this.URL = '';
    this.isSearchQuery = false;
    this.totalItems = 10;
    // this.data = [];
    this.container = list;
  }
  getRespForPagination(response, responseURL, data) {
    this.URL = responseURL;
    // console.log(responseURL);
    const URL = this.URL;
    // this.data = data;

    if (this.URL.includes('articlesearch')) this.isSearchQuery = true;

    if (this.isSearchQuery) {
      this.totalItems = response.data.response.meta.hits;
      const docs = response.data.response.docs;
      // console.log(docs);
      const normalized = getNormalizeResponse(docs, responseURL);
      this.container.innerHTML = getMarkup(normalized);
      console.log(this.totalItems);
      this.clearPageNumberToURL();
      this.addPageNumberToURL();
      console.log(this.totalItems);
    } else {
      this.totalItems = response.data.num_results;
      console.log(this.totalItems);
      this.container.innerHTML = getMarkup(data);
    }
    this.initPagination(this.page);
  }

  getURL(URL) {
    this.URL = URL;
  }

  addPageNumberToURL() {
    this.URL = this.URL + `page=${this.page}`;
    // console.log(this.URL, 'add pageNum');
  }
  clearPageNumberToURL() {
    this.URL = this.URL.includes('page=')
      ? this.URL.substring(0, this.URL.search('page='))
      : (this.URL = this.URL);
    // console.log(this.URL, 'del pageNum');
  }

  updatePageNumberToURL() {
    this.URL = this.URL.includes('page=')
      ? this.URL.substring(0, this.URL.search('page='))
      : (this.URL = this.URL);
    this.URL = this.URL + `page=${this.page}`;
  }

  changeCurrentPage(page) {
    this.page = page;
  }

  initPagination(page) {
    const paginationOptions = {
      totalItems: this.totalItems,
      page: 1,
      itemsPerPage: 10,
      visiblePages: 3,
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

        // this.updatePageNumberToURL(page);
        if (this.isSearchQuery) {
          this.clearPageNumberToURL(page);
          this.addPageNumberToURL(page);
          console.log(this.URL, 'url');
          axios.get(this.URL).then(answer => {
            const {
              data: {
                response: { docs },
              },
            } = answer;
            console.log(answer, 'new axios');
            const responseURL = answer.config.url;
            // console.log(responseURL, 'responseURL');
            // const docs = answer.data.docs;
            const data = getNormalizeResponse(docs, responseURL);

            // this.container.innerHTML = getMarkup(data);
            // console.log(data, 'last resp');
            // fetchByInputSerchAndDate(this.URL).then(answer => {
            //   const {
            //     data: {
            //       response: { docs },
            //     },
            //   } = answer;
            //   const responseURL = answer.config.url;
            //   const data = getNormalizeResponse(docs, responseURL);

            this.container.innerHTML = '';
            this.container.innerHTML = getMarkup(data);
            // console.log(data);
          });

          // const URL = this.URL;
          // fetchByInputSerchAndDate(URL).then(answer => {
          //   const {
          //     data: {
          //       response: { docs },
          //     },
          //   } = answer;
          //   const responseURL = answer.config.url;

          //   // const paginator = new Paginator();
          //   // paginator.getRespForPagination(answer, responseURL);
          //   list.innerHTML = getMarkup(data);
          //   //   console.log(data);
          // });

          // list.insertAdjacentHTML('beforeend', getMarkup(data));
          // this.getRespForPagination();
        }
        this.page = page;
        const list = document.querySelector('.home__list');
        const data = this.data;
        // const data = await paginator.getRespForPagination();

        // const { page, totalItems } = event;
        // fetchByChoosenCategories('food'); // повинен викликатися фетч і розмітка, фетч для searchQuery викликається окремо для сторінок
        // this.getRespForPagination();

        // const totalItems = data;
        // console.log(totalItems, 'data');
        // const totalItems = data.totalHits;
        // Paginator.totalItems = totalItems;

        // this.addPageNumberToURL();
        // console.log(pageCur, 'get curPg');
        // console.log(page, 'curPg');
        // console.log(this.page, 'new curPg');
      } catch (err) {
        console.log(err);
      }
      return pagination;
    });
  }
}

// const paginator = new Paginator();
// paginator.getRespForPagination();
