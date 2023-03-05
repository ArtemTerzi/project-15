// import { options } from './refs.js';
// import axios from 'axios';

const cardContainer = document.querySelector('.card-container');

export default class myFavoriteNews {
  renderCards() {
    this.cardObject = `<div class="wrapper">
    <div class="box">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="add-button">Add to favorite</button>
            <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>
    </div>
    <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a class="card-link" href="">Read more</a>
    </div>
  </div>`;
    cardContainer.insertAdjacentHTML('beforeend', this.cardObject);
  }
  onLike() {
    const item = 'myFavoriteNews';
    const savedNews = localStorage.getItem('myFavoriteNews');
    let isStored = localStorage.getItem(item) !== null;
    if (isStored) {
      localStorage.removeItem(item);
      this.renderCards(savedNews);
      console.log('added');
    } else {
      localStorage.setItem('myFavoriteNews', this.cardObject);
      this.renderCards(savedNews);
      console.log('removed');
    }
  }
}

// export default function renderCards() {
//   const cardObject = `<div class="wrapper">
//   <div class="box">
//       <img class="box-img"
//           src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="building" width="353" height="395">
//           <button type="button" id="like" class="add-button">Add to favorite</button>
//           <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>
//   </div>
//   <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>
//   <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
//       offered by these...</p>
//   <div class="card-details">
//       <p class="card-date">20/02/2021</p>
//       <a class="card-link" href="">Read more</a>
//   </div>
// </div>`;
//   cardContainer.insertAdjacentHTML('beforeend', cardObject);

//   localStorage.setItem('myFavoriteNews', cardObject);
// }
