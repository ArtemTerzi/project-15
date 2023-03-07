import { getMarkup } from './fetches/getMarkup';
import { refs } from './refs';
import { isFavoriteForStyle, isReadForStyle } from './favoriteReadStyles';
import RenderFavorites from './renderCard';
import throttle from 'lodash.throttle';
import { getMarkupError } from './error';

// const form = document.querySelector('.demo-form');
// const input = document.querySelector('.demo-input');
const renderFavorites = new RenderFavorites();
const cardContainer = document.querySelector('.card-container');
const favoriteMain = document.querySelector('.favorite-main');

// form.addEventListener(
//   'submit',
//   throttle(e => {
//     onArticleLike(e);
//   }, 300)
// );

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
  let section = myCard.querySelector('.box > p');

  let myObject = {
    img,
    imgName,
    title,
    text,
    date,
    link,
    section,

    isFavourite: false,
  };

  const cardObject = `<div class="wrapper">
<div class="box home__list-top">
<p class="home__list-section">${myObject.section}</p>
<img class="box-img"
src="${myObject.img}"
alt="${myObject.imgName}" width="353" height="395">
        <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
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
  let section = myCard.querySelector('.home__list-section');

  let img = imgUrlRef.getAttribute('src');
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
    section,
  };

  if (e.target.classList.contains('remove-button')) {
    e.target.classList.toggle('remove-button');
    e.target.textContent = 'Remove from favorite';
    try {
      const newsArr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
      if (newsArr === null) {
        localStorage.setItem(
          refs.KEY_LOCAL_STORAGE,
          JSON.stringify([myObject])
        );
        return;
      }
      if (newsArr !== null) {
        for (const news of newsArr) {
          if (news.link === myObject.link) {
            news.isFavorite = true;
            return;
          }
        }
      }
      newsArr.push(myObject);
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
    } catch (error) {
      const errorMarkup = getMarkupError();
      favoriteMain.innerHTML = errorMarkup;
    }
  } else if (e.target.classList.contains('add-button')) {
    e.target.classList.toggle('remove-button');
    e.target.textContent = 'Add to favorite';
    try {
      const newsArr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
      for (const news of newsArr) {
        if (news.link === myObject.link) {
          news.isFavorite = false;
        }
      }
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
    } catch (error) {
      const errorMarkup = getMarkupError();
      favoriteMain.innerHTML = errorMarkup;
    }
  }
}

function onLoad() {
  const arr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));

  if (arr === null) {
    const errorMarkup = getMarkupError();
    favoriteMain.innerHTML = errorMarkup;
  }
  return getMarkup(arr);
}

function renderCards() {
  cardContainer.innerHTML = onLoad();
}

if (onLoad() !== undefined) renderCards();

// --------------------------------------------------------------------------------------------------------

// function onLike(e) {
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
//     isFavorite: true,
//   };

//   if (e.target.classList.contains('remove-button')) {
//     e.target.classList.toggle('remove-button');
//     e.target.textContent = 'Remove from favorite';
//     try {
//       const newsArr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
//       if (newsArr === null) {
//         localStorage.setItem(
//           refs.KEY_LOCAL_STORAGE,
//           JSON.stringify([myObject])
//         );
//         return;
//       }
//       if (newsArr !== null) {
//         for (const news of newsArr) {
//           if (news.link === myObject.link) {
//             news.isFavorite = true;
//             return;
//           }
//         }
//       }
//       newsArr.push(myObject);
//       localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
//     } catch (error) {
//       const errorMarkup = getMarkupError();
//       favoriteMain.innerHTML = errorMarkup;
//     }
//   } else if (e.target.classList.contains('add-button')) {
//     e.target.classList.toggle('remove-button');
//     e.target.textContent = 'Add to favorite';
//     try {
//       const newsArr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
//       for (const news of newsArr) {
//         if (news.link === myObject.link) {
//           news.isFavorite = false;
//         }
//       }
//       localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
//     } catch (error) {
//       const errorMarkup = getMarkupError();
//       favoriteMain.innerHTML = errorMarkup;
//     }
//   }
// }

// function onLoad() {
//   const array = JSON.parse(localStorage.getItem('myFavoriteItem'));
//   let markup = array.reduce((acc, el) => {
//     if (el.isFavorite === true) {
//       cardMarkup(el) + acc;
//     } else acc;
//   }, '');
//   function cardMarkup({ img, imgName, title, text, date, link, section }) {
//     return `<div class="wrapper">
//     <div class="box home__list-top">
//     <p class="home__list-section">${section}</p>
//         <img class="box-img"
//             src="${img}"
//             alt="${imgName}" width="353" height="395">
//             <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
//     </div>
//     <h1 class="card-header">${title}</h1>
//     <p class="card-text">${text}</p>
//     <div class="card-details">
//         <p class="card-date">${date}</p>
//         <a id='news-link' class="card-link" href="">${link}</a>
//     </div>
//   </div>
//   `;
//   }
//   return markup;
// }
// function renderCards() {
//   cardContainer.innerHTML = onLoad();
// }
// ------------------------------------------------------------------------------------------------------
