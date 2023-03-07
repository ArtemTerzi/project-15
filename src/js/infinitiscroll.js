const spinner = document.querySelector('.spinner');
// ------------------------------

window.addEventListener(
  'scroll',
  debounce(e => {
    const q = refs.input.value;
    const documentRect = document.documentElement.getBoundingClientRect();
    const clientWidth = document.documentElement.clientWidth;// ширина окна за вычетом полосы прокрутки
if (clientWidth <= 780){ 
  alert(page);
  alert(q);
  alert(clientWidth);
  if (documentRect.bottom < document.documentElement.clientHeight + 1000) {
      page += 1;
      fetchData(q, page)
        .then(markup => refs.gallery.insertAdjacentHTML('beforeend', markup))
        .then(data => {
          refs.spinner.classList.remove('hidden');
          gallery.refresh();
        })
        .catch(error => {
          console.error(error);
          refs.spinner.classList.add('hidden');
        });
    }
}
 else 
alert(
  'PAGINATION'
);
refs.spinner.classList.add('hidden');
  }, 300)
);
