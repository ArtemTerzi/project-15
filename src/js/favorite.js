// import renderCards from './renderCard';
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

  // let arr = [];
  // let myObjectDeserialized = JSON.parse(localStorage.getItem('myFavoriteItem'));

  // cardContainer.addEventListener('click', () => {
  //   arr.push(myObject);
  //   localStorage.setItem('myFavoriteItem', JSON.stringify(arr));
  //   console.log('onlikee');
  // });

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
  const array = JSON.parse(localStorage.getItem('myFavoriteItem'));
  // let { img, imgName, title, text, date, link } = array;
  let markup = array.reduce((acc, el) => {
    if (el.isFavorite === true) {
      cardMarkup(el) + acc;
    } else acc;
  }, '');
  function cardMarkup({ img, imgName, title, text, date, link }) {
    return `<div class="wrapper">
    <div class="box home__list-top">
        <img class="box-img"
            src="${img}"
            alt="${imgName}" width="353" height="395">
            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
            <p class="img-label">Job searching </p>
    </div>
    <h1 class="card-header">${title}</h1>
    <p class="card-text">${text}</p>
    <div class="card-details">
        <p class="card-date">${date}</p>
        <a id='news-link' class="card-link" href="">${link}</a>
    </div>
  </div>
  `;
  }
  return markup;
}
function renderCards() {
  cardContainer.innerHTML = onLoad();
}
