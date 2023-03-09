const cardContainer = document.querySelector('.card-container');

export default class RenderFavorites {
  renderCards() {
    this.cardObject = `<li class="home__list-item">
      <div class="home__list-top">
          <p class="home__list-section">Job section</p>
          <p class="home__list-is-read">Already read &#10004;</p>
          <img width="353" height="395" class="home__list-img" src='https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='building'>
          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
      </div>
      <div class="home__list-description">
        <h2 class="home__list-title">Header 1</h2>
        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
      </div>
      <div class="home__list-footer">
        <p class="home__list-date">20/02/2021</p>
        <a href='first' class="home__list-link">Read more</a>
      </div>
    </li>
    <li class="home__list-item">
      <div class="home__list-top">
          <p class="home__list-section">Job section</p>
          <p class="home__list-is-read">Already read &#10004;</p>
          <img width="353" height="395" class="home__list-img" src='https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='building'>
          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
      </div>
      <div class="home__list-description">
        <h2 class="home__list-title">Header 2</h2>
        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
      </div>
      <div class="home__list-footer">
        <p class="home__list-date">20/02/2021</p>
        <a href='second' class="home__list-link">Read more</a>
      </div>
    </li>
    <li class="home__list-item">
      <div class="home__list-top">
          <p class="home__list-section">Job section</p>
          <p class="home__list-is-read">Already read &#10004;</p>
          <img width="353" height="395" class="home__list-img" src='https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='building'>
          <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
      </div>
      <div class="home__list-description">
        <h2 class="home__list-title">Header 3</h2>
        <p class="home__list-text">Before you start looking for a job, it is useful to familiarize yourself with the job prospects
        offered by these...</p>
      </div>
      <div class="home__list-footer">
        <p class="home__list-date">20/02/2021</p>
        <a href='third' class="home__list-link">Read more</a>
      </div>
    </li>`;
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
}
