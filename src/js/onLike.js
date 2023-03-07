// const card = document.querySelector('.card-container');
// card.addEventListener('click', onLike);

// class OnLoadPage {
//   saveIntoLocal(item) {
//     const items = this.getFromLocal();

//     items.push(item);

//     localStorage.setItem('myFavoriteItem', JSON.stringify(items));
//   }

//   getFromLocal() {
//     let arr;
//     if (localStorage.getItem('myFavoriteItem') === null) {
//       arr = [];
//     } else {
//       arr = JSON.parse(localStorage.getItem(myFavoriteItem));
//     }
//     return;
//   }
// }

// export function onLike(e) {
//   let bodyRef = e.target;
//   let myCard = bodyRef.parentNode.parentNode;
//   let liRef = myCard.querySelector('.wrapper');

//   let titleRef = myCard.querySelector('.card-header');
//   let cardTextRef = myCard.querySelector('.card-text');
//   let imgUrlRef = myCard.querySelector('.box > img[src]');
//   let imgNameRef = myCard.querySelector('.box > img[alt]');
//   let publishDateRef = myCard.querySelector('.card-details > .card-date');
//   let mainURLRef = myCard.querySelector('.card-details > .card-link');

//   let img = imgUrlRef.getAttribute('src');
//   let imgName = imgNameRef.textContent;
//   let title = titleRef.textContent;
//   let text = cardTextRef.textContent;
//   let date = publishDateRef.textContent;
//   let link = mainURLRef.getAttribute('href');

//   let myObject = {
//     img,
//     imgName,
//     title,
//     text,
//     date,
//     link,

//     isFavourite: false,
//     isRead: false,
//   };

//   let arr = [];

//   if (e.target.classList.contains('favorite-btn')) {
//     if (e.target.classList.contains('add-button')) {
//       e.target.classList.remove('add-button');
//       e.target.textContent = 'Add to favorite';
//       localStorage.removeItem('myFavoriteItem');
//     } else {
//       e.target.classList.add('add-button');
//       e.target.textContent = 'Remove from favorite';
//       arr.push(myObject);
//       console.log(myObject);
//       localStorage.setItem('myFavoriteItem', JSON.stringify(arr));
//     }
//   }
// }
