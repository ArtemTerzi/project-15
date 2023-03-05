// window.addEventListener(
//     'scroll',
//     debounce(e => {
//       const q = refs.input.value;
//       const documentRect = document.documentElement.getBoundingClientRect();
//       if (documentRect.bottom < document.documentElement.clientHeight + 1000) {
//         page += 1;
//         fetchData(q, page)
//           .then(markup => refs.gallery.insertAdjacentHTML('beforeend', markup))
//           .then(data => {
//             gallery.refresh();
//           })
//           .catch(error => {
//             console.error(error);
//             refs.loadMoreBtn.classList.add('hidden');
//           });
//       }
//     }, 300)
//   );