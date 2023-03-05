// const list = document.querySelector('.list');
// list.scrollTop = 1;
// list.addEventListener('scroll', function(ev) {
//   let items = this.querySelectorAll('.item');
//   if (parseInt(this.scrollTop) == 0) {
//     this.scrollTop = items[items.length - 1].clientHeight;
//     this.prepend(items[items.length - 1]);
//     this.scrollTop = 1;
//   } else if (this.scrollTop > this.scrollHeight - this.clientHeight - 1) {
//     this.append(items[0]);
//   }
//   return false;
// });

window.addEventListener(
    'scroll',
    debounce(e => {
      const q = refs.input.value;
      const documentRect = document.documentElement.getBoundingClientRect();
      if (documentRect.bottom < document.documentElement.clientHeight + 1000) {
        page += 1;
        fetchData(q, page)
          .then(markup => refs.gallery.insertAdjacentHTML('beforeend', markup))
          .then(data => {
            gallery.refresh();
          })
          .catch(error => {
            console.error(error);
            refs.loadMoreBtn.classList.add('hidden');
          });
      }
    }, 300)
  );