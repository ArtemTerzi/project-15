import axios from 'axios';
import Pagination from 'tui-pagination';

const containerPagination = document.querySelector('.tui-pagination'); // to refs

class NewsApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  async getNews() {
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&p=${this.page}`;
    // this.incrementPage();
    const response = await axios.get(URL);
    const data = response.data.response;
    const articles1 = data.docs; ///need to change
    const totalHits = data.meta.hits;
    const totalPages = Math.ceil(totalHits / 10);
    const page = this.page;
    const dataObj = {
      articles1,
      totalHits,
      totalPages,
      page,
    };

    console.log(data);
    console.log(totalHits);
    console.log(totalPages);
    console.log(dataObj, 'fetch');

    return dataObj;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
const newsApiService = new NewsApiService();

async function getDataNews() {
  try {
    const data = await newsApiService.getNews();

    if (data.articles1.length === 0) throw new Error('No data');
  } catch (err) {
    console.log(err);
  }
}

const pagination = new Pagination('.tui-pagination', {
  totalItems: 500, // totalHits
  itemsPerPage: 10,
  visiblePages: 3,
  page: 1,
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
});

pagination.on('afterMove', async ({ page }) => {
  try {
    newsApiService.page = page;

    const data = await newsApiService.getNews();

    maxPage = data.totalPages;
    console.log(maxPage);
  } catch (err) {
    console.log(err);
  }
});
