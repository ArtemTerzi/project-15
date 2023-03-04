const search = document.querySelector('.header__form');
const header = document.querySelector('.header');

search.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.add('search--active')
});

header.addEventListener('click', function() {
    search.classList.remove('search--active')
});
