// import { options } from './refs.js';
import axios from 'axios';

const cardContainer = document.querySelector('.card-container');

export default class RenderFavorites {
  renderCards() {
    this.cardObject = `<div class="wrapper">
    <div class="box">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="favorite-btn add-button">Add to favorite</button>
            <button type="button" id="dislike" class="favorite-btn remove-button invisible-button">Remove from favorite</button>
    </div>
    <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a class="card-link" href="first">Read more</a>
    </div>
  </div>
  <div class="wrapper">
    <div class="box">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="favorite-btn add-button">Add to favorite</button>
            <button type="button" id="dislike" class="favorite-btn remove-button invisible-button">Remove from favorite</button>
    </div>
    <h1 class="card-header">Header 2</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a class="card-link" href="second">Read more</a>
    </div>
  </div>
  <div class="wrapper">
    <div class="box">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="favorite-btn add-button ">Add to favorite</button>
            <button type="button" id="dislike" class="favorite-btn remove-button invisible-button">Remove from favorite</button>
    </div>
    <h1 class="card-header">Header 3</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a class="card-link" href="third">Read more</a>
    </div>
  </div>`;
    cardContainer.insertAdjacentHTML('beforeend', this.cardObject);
  }
}

function onLike() {
  const savedNews = localStorage.getItem('myFavoriteNews');
  let isStored = localStorage.getItem(item) !== null;
  if (isStored) {
    localStorage.removeItem(item);
    // this.renderCards(savedNews);
    cardContainer.innerHTML = this.cardObject;
    console.log('added');
  } else {
    // localStorage.setItem('myFavoriteNews', this.cardObject);
    localStorage.setItem('myFavoriteNews', JSON.stringify(arr));
    // this.renderCards(savedNews);
    cardContainer.innerHTML = this.cardObject;
    console.log('removed');
  }

// function addToLocal() {
//   const card = document.querySelector('.card-container');
//   const arr = [];
//   const obj = {
//     imgSrc:
//       'https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     header:
//       '8 tips for passing an online interview that will help you get a job',
//     date: '20/02/2021',
//     isFavorite: true,
//     isRead: true,
//   };
//   const item = 'myFavoriteNews';
//   const objJson = JSON.stringify(obj);
//   const cardItem = JSON.parse(objJson);

//   card.addEventListener('click', () => {
//     arr.push(objJson);
//     onLike();
//     console.log('fdgvfgd');
//     console.log(cardItem);
//   });
  







  // function renderCards(cardItem) {
  //   const {
  //     imgSrc,
  //     header,
  //     date
  //   } = cardItem;
  //   const markup = `<div class="wrapper">
  //   <div class="box">
  //       <img class="box-img"
  //           src="${imgSrc}"
  //           alt="building" width="353" height="395">
  //           <button type="button" id="like" class="add-button">Add to favorite</button>
  //           <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>
  //   </div>
  //   <h1 class="card-header">${header}</h1>
  //   <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
  //       offered by these...</p>
  //   <div class="card-details">
  //       <p class="card-date">${date}</p>
  //       <a class="card-link" href="">Read more</a>
  //   </div>
  // </div>`;
  //   cardContainer.insertAdjacentHTML('beforeend', markup);
  // }



// export default class FavoriteNews {
//   constructor() {
//     this.baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
//     this.key = 'OscA3OKXY3gWPl6ECtjWYj2TUQAq48XN';
//     this.searchQuery = '';
//   }

//   async getData() {
//     const dataURL = `${this.baseUrl}?q=${this.searchQuery}&api-key=${this.key}`;
//     return await axios.get(dataURL).then(response => response.json()).than(data => {
//       const img = data.defaultImg;
//       const alt = data.news.adx_keywords;
//       const title = data.news.headline.main;
//       const text = data.createThreePoints(news.snippet);
//       const date = data.convertoNormalDate(news.pub_date);
//       const link = data.news.web_url;
//     })
//   }
//   setSearchQuery(name) {
//     this.searchQuery = name;
//   }
// }

// .then(response => response.json())
// .then(data => {
//   const dynamicValue = data.value; // Extract the required value
//   localStorage.setItem('dynamicValue', dynamicValue); // Store the value in local storage
// })
// .catch(error => console.error(error));

// export default function renderHtml(obj) {
//   const img = `${defaultImg}`;
//   const title = `${news.headline.main}`;
//   const text = `${createThreePoints(news.snippet)}`;
//   const date = `${convertoNormalDate(news.pub_date)}`;
//   const link = `${news.web_url}`;
//   // const [{
//   //   img: `${defaultImg}`,
//   //   title: `${news.headline.main}`,
//   //   text: `${createThreePoints(news.snippet)}`,
//   //   date: `${convertoNormalDate(news.pub_date)}`,
//   //   link: `${news.web_url}`,
//   // }] = obj;
//   const card = `<div class="wrapper">
//     <div class="box">
//         <img class="box-img"
//             src="${img}"
//             alt="" width="353" height="395">
//             <button type="button" id="like" class="add-button">Add to favorite</button>
//             <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>
//     </div>
//     <h1 class="card-header">${title}</h1>
//     <p class="card-text">${text}</p>
//     <div class="card-details">
//         <p class="card-date">${date}</p>
//         <a class="card-link" href="${link}">Read more</a>
//     </div>
//   </div>`;
//     cardContainer.insertAdjacentHTML('beforeend', card);
//   }
