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

const containerPagination = document.querySelector('.tui-pagination'); // to refs
const ENDPOINT_URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`; // to refs
// `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&`;
export class Paginator {
  constructor() {
    this.page = 1;
    // this.searchQuery = '';
    this.URL = ENDPOINT_URL;
    // this.totalItems = 100;
  }
  async getRespForPagination() {
    const URL = this.URL;
    // const URL = `https://api.nytimes.com/svc/news/v3/content/all/food.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&p=${this.page}`;
    const response = await axios.get(URL);
    const data = response.data.response;
    console.log(response, 'resp get');
    const totalItems = response.data.num_results;
    const page = this.page;
    // const dataObj = {
    //   articles1,
    //   totalHits,
    //   totalPages,
    //   page,
    // };

    console.log(totalItems);
    this.initPagination({ totalItems, page });
    return totalItems;
  }

  initPagination(event) {
    const { totalItems, page } = event;
    const paginationOptions = {
      totalItems,
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
        // const data = await paginator.getRespForPagination();
        const { page, totalItems } = event;
        // fetchByChoosenCategories('food'); // повинен викликатися фетч і розмітка, фетч для searchQuery викликається окремо для сторінок
        // this.getRespForPagination();

        // const totalItems = data;
        // console.log(totalItems, 'data');
        // const totalItems = data.totalHits;
        // Paginator.totalItems = totalItems;
        const pageCur = pagination.getCurrentPage();
        console.log(pageCur, 'get curPg');
        console.log(page, 'curPg');
      } catch (err) {
        console.log(err);
      }
      return page;
    });
  }
}

const paginator = new Paginator();
paginator.getRespForPagination();
