const cardContainer = document.querySelector('.card-container');


export default class RenderFavorites {
  renderCards() {
    this.cardObject = `<div class="wrapper">
    <div class="box home__list-top">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
            <p class="img-label">Job searching </p>
    </div>
    <h1 class="card-header">8 tips for passing an online interview that will help you get a job</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a id='news-link'class="card-link" href="first">Read more</a>
    </div>
  </div>
  <div class="wrapper">
    <div class="box home__list-top">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
            <p class="img-label">Job searching </p>
    </div>
    <h1 class="card-header">Header 2</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a id='news-link'class="card-link" href="second">Read more</a>
    </div>
  </div>
  <div class="wrapper">
    <div class="box home__list-top">
        <img class="box-img"
            src="https://images.pexels.com/photos/10937018/pexels-photo-10937018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="building" width="353" height="395">
            <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
            <p class="img-label">Job searching </p>
    </div>
    <h1 class="card-header">Header 3</h1>
    <p class="card-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
    <div class="card-details">
        <p class="card-date">20/02/2021</p>
        <a id='news-link' class="card-link" href="third">Read more</a>
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
    cardContainer.innerHTML = this.cardObject;
    console.log('added');
  } else {
    localStorage.setItem('myFavoriteNews', JSON.stringify(arr));
    cardContainer.innerHTML = this.cardObject;
    console.log('removed');
  }