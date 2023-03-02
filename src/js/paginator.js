// import axios from 'axios';
// // import Pagination from 'tui-pagination';

// //const container = document.getElementById('pagination'); // to refs
// const options = {
//   // below default value of options
//   totalItems: 10,
//   itemsPerPage: 10,
//   visiblePages: 10,
//   page: 1,
//   centerAlign: false,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };
// //const pagination = new Pagination(container, options);

// class NewsApiService {
//   constructor() {
//     this.pageQuery = 1;
//     this.searchQuery = '';
//   }
//   async getNews() {
//     const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=8RdNRAJ2BzjK5i7Pxc73lS6mPRf4flGA&p=${this.pageQuery}`;
//     this.incrementPage();
//     const response = await axios.get(URL);
//     const data = response.data.response;

//     return data;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
// const newsApiService = new NewsApiService();

// const pageNumber = 10; // to take from evt click on btn page
// newsApiService.pageQuery = pageNumber;

// // pagination.on('afterMove', event => {
// //   const currentPage = event.page;
// //   console.log(currentPage);
// // });

// async function fetchArticles() {
//   try {
//     const data = await newsApiService.getNews();
//     const articles1 = data.docs; ///need to change
//     const totalHits = data.meta.hits;
//     const totalPages = Math.ceil(totalHits / 10);

//     console.log(data);
//     console.log(totalHits);
//     console.log(totalPages);

//     if (articles1.length === 0) throw new Error('No data');

//     // const markup = articles.map(article => createMarkup(article)).join('');

//     // updateNewsList(markup);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchArticles();
