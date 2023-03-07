export function getMarkup(arr) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  return arr.map(({ img, title, text, date, link, section }) => {

    return `
    <li class="home__list-item">
      <div class="home__list-top">
          <p class="home__list-section">${section}</p>
          <img width="353" height="395" class="home__list-img" src=${img} alt=${title}>
          <button type="button" id="like" class="add-btn">Add to favorite</button>
          <button type="button" id="dislike" class="remove-button invisible-button">Remove from favorite</button>
      </div>
      <div class="home__list-description">
        <h2 class="home__list-title">${title}</h2>
        <p class="home__list-text">${text}</p>
      </div>
      <div class="home__list-footer">
        <p class="home__list-date">${date}</p>
        <a href=${link} class="home__list-link">Read more</a>
      </div>
    </li>
    `
  }).join("");
}
