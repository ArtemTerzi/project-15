const search = document.querySelector('.header__form');
const searchMobile = document.querySelector('.search__mobile');

const searchInput = document.querySelector('input[name="search"]');

function onSearchMobile() {
  search.classList.add('search--active');
}

const menu = document.getElementById('navigation');
const currentPage = location.pathname;

menu.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('navigation__link--current');
  }
});

function removeActiveSearch(event) {
  if (
    event.target.nodeName === searchInput.nodeName ||
    event.target.className.baseVal === 'search__mobile-logo' ||
    event.target.className.baseVal === '/icons.adfc4680.svg#search' ||
    event.target.className.animVal === '/icons.adfc4680.svg#search'
  ) {
    return;
  }
  search.classList.remove('search--active');
}

searchMobile.addEventListener('click', onSearchMobile);
document.addEventListener('click', removeActiveSearch);
