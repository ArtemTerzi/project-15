import renderCards from './renderCard.js';
import renderFavoriteCards from './renderCard.js';
import throttle from 'lodash.throttle';
//1) adaptive
//2) fetch(get news by input) Listener on Form
//3) by clicking on add to favorites(adds object-card to local storage-rerender cards) Listener on Add to Fav.btn
//4) by clicking on remove from favorites (remove from localStorage - rerender cards)
//5) if card was watched - blur(get by id/time watched) - Listener for Read more
//  <!-- <a href="./favorite.html">Click on me!</a> in index.html-->

const form = document.querySelector('.demo-form');
const input = document.querySelector('.demo-input');
const LOCALSTORAGE_KEY = 'favorite-articles';
const elements = {};

form.addEventListener(
  'submit',
  throttle(e => {
    onArticlesSearch(e);
  }, 300)
);

function onArticlesSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.articleName.value.trim();
  renderCards();
  //code below shoudld be deleted
  elements[e.target.name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
}

//function below should be moved and modified

function addFavoriteArticle(e) {
  const form = e.currentTarget;
  const value = form.elements.articleName.value.trim();
  elements[e.target.name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
}
