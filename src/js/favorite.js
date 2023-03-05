// import renderCards from './renderCard';
import myFavoriteNews from './renderCard';
import throttle from 'lodash.throttle';
//1) adaptive
//2) fetch(get news by input) Listener on Form
//3) by clicking on add to favorites(adds object-card to local storage-rerender cards) Listener on Add to Fav.btn
//4) by clicking on remove from favorites (remove from localStorage - rerender cards)
//5) if card was watched - blur(get by id/time watched) - Listener for Read more

const form = document.querySelector('.demo-form');
const input = document.querySelector('.demo-input');
const LOCALSTORAGE_KEY = 'favorite-articles';
const elements = {};
const card = document.querySelector('.card-container');
const favoriteNews = new myFavoriteNews();

// const addBtn = document.getElementById('like');
// const removeBtn = document.getElementById('dislike');

form.addEventListener(
  'submit',
  throttle(e => {
    onArticlesSearch(e);
  }, 300)
);

card.addEventListener('click', onLike);

function onArticlesSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.articleName.value.trim();
  favoriteNews.renderCards();
  //code below shoudld be deleted
  // elements[e.target.name] = value;
  // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(elements));
}

function onLike(e) {
  favoriteNews.onLike();
}

// const addBtn = document.createElement('button');
// addBtn.innerText = 'Add to favorite';
// addBtn.classList.add('add-button');
// console.log(addBtn);

// function onLike() {
//   const favoriteNews = { object};
//   localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
//   const storedNews = JSON.parse(localStorage.getItem('favoriteNews'));
//   console.log(storedNews);
// }

// function removeFromLocalStorage() {

// }

//   const favoriteButton = document.createElement('button');
//   button.setAttribute('id', 'my-button');
//   button.innerText = 'Click me';
//   parentElement.appendChild(button);
// }
