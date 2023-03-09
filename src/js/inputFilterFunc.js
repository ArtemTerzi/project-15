import { makeArrNewsForPageRead } from './read';
import { refs } from './refs';
import { getMarkup } from './fetches/getMarkup';

const readPageList = document.querySelector('.readPage-list');
// const list = document.querySelector('read-page-list__list');

function onSearchFilter() {
  const searchInput = document.querySelector('.search__input');
  if (window.location.pathname !== '/index.html') {
    searchInput.addEventListener('input', filtered);
  }
}

function filtered(event) {
  const value = event.currentTarget.value;
  const localArray = JSON.parse(
    localStorage.getItem('news-state-local-storage')
  );

  const filteredArray = localArray.filter(({ title }) => title.includes(value));
  readPageList.innerHTML = getMarkup(filteredArray);
}

export { onSearchFilter };
