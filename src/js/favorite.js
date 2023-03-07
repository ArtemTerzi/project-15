import { getMarkup } from './fetches/getMarkup';
import { refs } from './refs';
import { isFavoriteForStyle, isReadForStyle } from './favoriteReadStyles';
import RenderFavorites from './renderCard';
import throttle from 'lodash.throttle';

const form = document.querySelector('.demo-form');
const input = document.querySelector('.demo-input');
const renderFavorites = new RenderFavorites();
const cardContainer = document.querySelector('.card-container');

form.addEventListener(
  'submit',
  throttle(e => {
    onArticleLike(e);
  }, 300)
);

function onArticleLike(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const value = form.elements.articleName.value.trim();

  renderFavorites.renderCards();

  let bodyRef = e.target;
  let myCard = bodyRef.parentNode.parentNode;
  let liRef = myCard.querySelector('.wrapper');

  let titleRef = myCard.querySelector('.card-header');
  let cardTextRef = myCard.querySelector('.card-text');
  let imgUrlRef = myCard.querySelector('.box > img[src]');
  let imgNameRef = myCard.querySelector('.box > img[alt]');
  let publishDateRef = myCard.querySelector('.card-details > .card-date');
  let mainURLRef = myCard.querySelector('.card-details > .card-link');

  let img = imgUrlRef.getAttribute('src');
  let imgName = imgNameRef.textContent;
  let title = titleRef.textContent;
  let text = cardTextRef.textContent;
  let date = publishDateRef.textContent;
  let link = mainURLRef.getAttribute('href');

  let myObject = {
    img,
    imgName,
    title,
    text,
    date,
    link,

    isFavourite: false,
    isRead: false,
  };

  const cardObject = `<div class="wrapper">
<div class="box home__list-top">
<img class="box-img"
src="${myObject.img}"
alt="${myObject.imgName}" width="353" height="395">
        <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
        <p class="img-label">Job searching </p>
</div>
<h1 class="card-header">${myObject.title}</h1>
<p class="card-text">${myObject.text}</p>
<div class="card-details">
<p class="card-date">${myObject.date}</p>
    <a class="card-link" href="">${myObject.link}</a>
</div>
</div>`;
  cardContainer.insertAdjacentHTML('beforeend', cardObject);
}

const card = document.querySelector('.card-container');
card.addEventListener('click', onLike);

let arr = [];

function onLike(e) {
  let bodyRef = e.target;
  let myCard = bodyRef.parentNode.parentNode;
  let liRef = myCard.querySelector('.home__list-item');

  let titleRef = myCard.querySelector('.home__list-title');
  let cardTextRef = myCard.querySelector('.home__list-text');
  let imgUrlRef = myCard.querySelector('.home__list');
  let imgNameRef = myCard.querySelector('.home__list-top > img[alt]');
  let publishDateRef = myCard.querySelector(
    '.home__list-footer > .home__list-date'
  );
  let mainURLRef = myCard.querySelector(
    '.home__list-footer > .home__list-link'
  );

  let img = imgUrlRef.getAttribute('src');
  // let section =
  // let title = imgNameRef.textContent;
  let title = titleRef.textContent;
  let text = cardTextRef.textContent;
  let date = publishDateRef.textContent;
  let link = mainURLRef.getAttribute('href');

  let myObject = {
    img,
    title,
    text,
    date,
    link,
    // section,
    isFavorite: true,
  };

  if (e.target.nodeName === 'BUTTON') {
    if (e.target.classList.contains('remove-button')) {
      e.target.classList.toggle('remove-button');
      e.target.textContent = 'Remove from favorite';
      arr.push(myObject);
      console.log(arr);
      localStorage.setItem('myFavoriteItem', JSON.stringify(arr));
    } else {
      e.target.classList.toggle('remove-button');
      e.target.textContent = 'Add to favorite';
    }
  }
}

function onLoad() {
  const arr = JSON.parse(localStorage.getItem('myFavoriteItem'));
  return getMarkup(arr);
}

function renderCards() {
  cardContainer.innerHTML = onLoad();
}

renderCards();

// -------------------------------

// function onArticleLike(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const value = form.elements.articleName.value.trim();

//   renderFavorites.renderCards();

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
//   };

//   const cardObject = `<div class="wrapper">
// <div class="box home__list-top">
// <img class="box-img"
// src="${myObject.img}"
// alt="${myObject.imgName}" width="353" height="395">
//         <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
//         <p class="img-label">Job searching </p>
// </div>
// <h1 class="card-header">${myObject.title}</h1>
// <p class="card-text">${myObject.text}</p>
// <div class="card-details">
// <p class="card-date">${myObject.date}</p>
//     <a class="card-link" href="">${myObject.link}</a>
// </div>
// </div>`;
//   cardContainer.insertAdjacentHTML('beforeend', cardObject);

//   if (e.target.nodeName === 'BUTTON') {
//     if (e.target.classList.contains('remove-button')) {
//       e.target.classList.toggle('remove-button');
//       e.target.textContent = 'Remove from favorite';
//       arr.push(myObject);
//       localStorage.setItem('myFavoriteItem', JSON.stringify(arr));
//     } else {
//       e.target.classList.toggle('remove-button');
//       e.target.textContent = 'Add to favorite';
//     }
//   }
// }

// const card = document.querySelector('.card-container');
// card.addEventListener('click', onLike);

// let arr = [];

// function onLike(e) {
//   let bodyRef = e.target;
//   let myCard = bodyRef.parentNode.parentNode;
//   let liRef = myCard.querySelector('.home__list-item');

//   let titleRef = myCard.querySelector('.home__list-title');
//   let cardTextRef = myCard.querySelector('.home__list-text');
//   let imgUrlRef = myCard.querySelector('.home__list');
//   let imgNameRef = myCard.querySelector('.home__list-top > img[alt]');
//   let publishDateRef = myCard.querySelector(
//     '.home__list-footer > .home__list-date'
//   );
//   let mainURLRef = myCard.querySelector(
//     '.home__list-footer > .home__list-link'
//   );

//   let img = imgUrlRef.getAttribute('src');
//   // let section =
//   // let title = imgNameRef.textContent;
//   let title = titleRef.textContent;
//   let text = cardTextRef.textContent;
//   let date = publishDateRef.textContent;
//   let link = mainURLRef.getAttribute('href');

//   let myObject = {
//     img,
//     title,
//     text,
//     date,
//     link,
//     // section,
//     isFavorite: true,
//   };

//   if (e.target.nodeName === 'BUTTON') {
//     if (e.target.classList.contains('remove-button')) {
//       e.target.classList.toggle('remove-button');
//       e.target.textContent = 'Remove from favorite';
//       arr.push(myObject);
//       localStorage.setItem('myFavoriteItem', JSON.stringify(arr));
//     } else {
//       e.target.classList.toggle('remove-button');
//       e.target.textContent = 'Add to favorite';
//     }
//   }
// }
