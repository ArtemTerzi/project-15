const search = document.querySelector('.header__form');
const header = document.querySelector('.header');

search.addEventListener('click', function (e) {
  // e.stopPropagation();
  this.classList.add('search--active');
});

header.addEventListener('click', function () {
  search.classList.remove('search--active');
});

const menu = document.getElementById('navigation');
const currentPage = location.pathname;

menu.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('navigation__link--current');
  }
});
