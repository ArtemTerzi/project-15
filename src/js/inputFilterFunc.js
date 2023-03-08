import { makeArrNewsForPageRead } from './read';
const searchInput = document.querySelector('.search__input');
if (window.location.pathname !== '/index.html') {
  searchInput.addEventListener('input', makeArrNewsForPageRead);
  console.log('hi');
}
