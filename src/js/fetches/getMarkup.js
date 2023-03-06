export function getMarkup(arr) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  return arr.map(({ img, title, text, date, link, section }) => {
    return `
        <div class="home__list-item">
            <div class="home__list-img">
              <p class="home__list-section">${section}</p>
              <img src="${defaultImg && img}" alt="${title}">
            </div>
            <div class="news-item__buttons">
              <button type="button" class="news-item__btn">Add to favorite</button>
              <button type="button" class="news-item__category">Job searching</button>
            </div>
            <div class="news-item__wrapper-descr">
              <p class="news-item__title">${title}</p>
              <p class="news-item__text">${text}</p>
            </div>
            <div class="news-item__wrapper-date">
              <p class="news-item__date">${date}</p>
              <a href="${link}"class="news-item__link">Read more</a>
            </div>
        </div>`
  }).join("");
}
