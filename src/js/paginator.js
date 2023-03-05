import axios from 'axios';
import Pagination from 'tui-pagination';
import {
  fetchByChoosenCategories,
  markupForSearchByCategories,
} from './fetchByCategories';
import './fetchByInputAndDate';
import './fetchMostPopular';
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
const ENDPOINT_URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
// const ENDPOINT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&`;
// const ENDPOINT_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
// const ENDPOINT_URL =
//   'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g';
export class Paginator {
  constructor() {
    this.page = 1;
    // this.searchQuery = '';
    this.URL = ENDPOINT_URL;
    // this.URL_withPage = ENDPOINT_URL + `p=${this.page}`;
    this.isSearchQuery = false;
    this.totalItems = 10;
  }
  async getRespForPagination() {
    const URL = this.URL;
    // const URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&p=${this.page}`;
    const response = await axios.get(URL);
    if (this.URL.includes('articlesearch')) this.isSearchQuery = true;

    if (this.isSearchQuery) {
      this.totalItems = response.data.response.meta.hits;
      this.clearPageNumberToURL();
      this.addPageNumberToURL();
    } else {
      this.totalItems = response.data.num_results;
    }

    const totalItems = this.totalItems;

    console.log(this.totalItems, 'change TI');
    // const data = response.data.response;
    // console.log(response, 'resp get');
    // const totalItems = response.data.response.meta.hits; // fetchByInputAndDate
    // const responseURL = response.config.url; // fetchByInputAndDate
    const responseURL = response.config.url;
    // const totalItems = response.data.num_results;
    const page = this.page;
    // const dataObj = {
    //   articles1,
    //   totalHits,
    //   totalPages,
    //   page,
    // };

    console.log(this.isSearchQuery);
    console.log(responseURL);
    console.log(totalItems, 'totalItems');
    this.initPagination({ totalItems, page });
    return totalItems;
  }

  getURL(URL) {
    this.URL = URL;
  }

  addPageNumberToURL() {
    this.URL = this.URL + `p=${this.page}`;
    console.log(this.URL, 'add pageNum');
  }
  clearPageNumberToURL() {
    this.URL = this.URL.includes('p=')
      ? this.URL.substring(0, this.URL.search('p='))
      : (this.URL = this.URL);
    console.log(this.URL, 'del pageNum');
  }

  updatePageNumberToURL(page) {
    this.URL = this.URL.includes('p=')
      ? this.URL.substring(0, this.URL.search('p='))
      : (this.URL = this.URL);
    this.URL = this.URL + `p=${this.page}`;
  }

  changeCurrentPage(page) {
    this.page = page;
  }

  initPagination(event) {
    const { totalItems, page } = event;
    const paginationOptions = {
      totalItems,
      page,
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
        const { page, totalItems } = event;
        if (this.isSearchQuery) {
          this.changeCurrentPage(page);
          this.updatePageNumberToURL(page);
          this.getRespForPagination();
        }
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
        console.log(page, 'curPg');
        console.log(this.page, 'new curPg');
      } catch (err) {
        console.log(err);
      }
      return page;
    });
  }
}

const paginator = new Paginator();
paginator.getRespForPagination();
