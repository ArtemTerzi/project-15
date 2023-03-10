import { getMarkup } from './fetches/getMarkup';
import { refs } from './refs';
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
  let liRef = myCard.querySelector('.home__list-item');

  let titleRef = myCard.querySelector('.home__list-title');
  let cardTextRef = myCard.querySelector('.home__list-text');
  let imgUrlRef = myCard.querySelector('.home__list-top > img[src]');
  let imgNameRef = myCard.querySelector('.home__list-top > img[alt]');
  let publishDateRef = myCard.querySelector(
    '.home__list-footer > .home__list-date'
  );
  let mainURLRef = myCard.querySelector(
    '.home__list-footer > .home__list-link'
  );

  let sectionRef = myCard.querySelector('.home__list-section');
  let section = sectionRef.textContent;

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
    section,

    isFavourite: false,
  };

  const cardObject = `<li class="home__list-item">
  <div class="home__list-top">
      <p class="home__list-section">${myObject.section}</p>
      <p class="home__list-is-read">Already read &#10004;</p>
      <img width="353" height="395" class="home__list-img" src=${myObject.img} alt=${myObject.imgName}>
      <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
  </div>
  <div class="home__list-description">
    <h2 class="home__list-title">${myObject.title}</h2>
    <p class="home__list-text">${myObject.text}</p>
  </div>
  <div class="home__list-footer">
    <p class="home__list-date">${myObject.date}</p>
    <a href=${myObject.link} class="home__list-link">Read more</a>
  </div>
</li>`;
  cardContainer.insertAdjacentHTML('beforeend', cardObject);
}

const card = document.querySelector('.card-container');
card.addEventListener('click', onLike);

let arr = [];

export function onLike(e) {
  let bodyRef = e.target;
  let myCard = bodyRef.parentNode.parentNode;
  let liRef = myCard.querySelector('.home__list-item');

  let titleRef = myCard.querySelector('.home__list-title');
  let cardTextRef = myCard.querySelector('.home__list-text');
  let imgUrlRef = myCard.querySelector('.home__list-top > img');
  let imgNameRef = myCard.querySelector('.home__list-top > img[alt]');
  let publishDateRef = myCard.querySelector(
    '.home__list-footer > .home__list-date'
  );
  let mainURLRef = myCard.querySelector(
    '.home__list-footer > .home__list-link'
  );
  let sectionRef = myCard.querySelector('.home__list-section');

  let img = imgUrlRef.getAttribute('src');
  let title = titleRef.textContent;
  let text = cardTextRef.textContent;
  let date = publishDateRef.textContent;
  let link = mainURLRef.getAttribute('href');
  let section = sectionRef.textContent;

  let myObject = {
    img,
    title,
    text,
    date,
    link,
    section,
    isFavorite: true,
  };

  if (e.target.classList.contains('remove-button')) {
    e.target.classList.toggle('remove-button');
    e.target.textContent = 'Remove from favorite';
    e.target.classList.add('is-liked');
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
        if (newsArr.every(news => news.link !== myObject.link)) {
          newsArr.push(myObject);
          localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
        }
        const newNewsArray = newsArr.reduce((newArray, news) => {
          if (news.link === myObject.link) {
            news.isFavorite = true;
          }
          newArray.push(news);
          return newArray;
        }, []);
        localStorage.setItem(
          refs.KEY_LOCAL_STORAGE,
          JSON.stringify(newNewsArray)
        );
      }
      location.reload();
    } catch (error) {
      const errorMarkup = getMarkupError();
      favoriteMain.innerHTML = errorMarkup;
    }
  } else if (e.target.classList.contains('add-button')) {
    e.target.classList.toggle('remove-button');
    e.target.textContent = 'Add to favorite';
    e.target.classList.remove('is-liked');
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
        if (newsArr.every(news => news.link !== myObject.link)) {
          newsArr.push(myObject);
          localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
        }
        const newNewsArray = newsArr.reduce((newArray, news) => {
          if (news.link === myObject.link) {
            news.isFavorite = false;
          }
          newArray.push(news);
          return newArray;
        }, []);
        localStorage.setItem(
          refs.KEY_LOCAL_STORAGE,
          JSON.stringify(newNewsArray)
        );
      }
      location.reload();
    } catch (error) {
      const errorMarkup = getMarkupError();
      favoriteMain.innerHTML = errorMarkup;
    }
  }
}

// export function onLoad() {
//   try {
//     const arr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
//     const favoriteArr = arr.reduce((arrNews, news) => {
//       if (news.isFavorite) {
//         arrNews.push(news);
//       }
//       return arrNews;
//     }, []);
//     return getMarkup(favoriteArr);
//   } catch (error) {
//     const errorMarkup = getMarkupError();
//     favoriteMain.innerHTML = errorMarkup;
//   }
// }

export function onLoad() {
  try {
    const arr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
    const favoriteArr = arr.reduce((arrNews, news) => {
      if (news.isFavorite) {
        arrNews.push(news);
      }
      return arrNews;
    }, []);
    if (favoriteArr.length !== 0) {
      return getMarkup(favoriteArr);
    } else {
      const errorMarkup = getMarkupError();
      favoriteMain.innerHTML = errorMarkup;
    }
  } catch (error) {
    const errorMarkup = getMarkupError();
    favoriteMain.innerHTML = errorMarkup;
  }
}

function renderCards() {
  cardContainer.innerHTML = onLoad();
}

if (onLoad() !== undefined) renderCards();

// --------------------------------------------------------------------------------------------------------

// function onLike(e) {
//   let bodyRef = e.target;
//   let myCard = bodyRef.parentNode.parentNode;
//   let liRef = myCard.querySelector('.home__list-item');

//   let titleRef = myCard.querySelector('.home__list-title');
//   let cardTextRef = myCard.querySelector('.home__list-text');
//   let imgUrlRef = myCard.querySelector('.home__list-top > img');
//   let imgNameRef = myCard.querySelector('.home__list-top > img[alt]');
//   let publishDateRef = myCard.querySelector(
//     '.home__list-footer > .home__list-date'
//   );
//   let mainURLRef = myCard.querySelector(
//     '.home__list-footer > .home__list-link'
//   );
//   let sectionRef = myCard.querySelector('.home__list-section');

//   let img = imgUrlRef.getAttribute('src');
//   let title = titleRef.textContent;
//   let text = cardTextRef.textContent;
//   let date = publishDateRef.textContent;
//   let link = mainURLRef.getAttribute('href');
//   let section = sectionRef.textContent;

//   let myObject = {
//     img,
//     title,
//     text,
//     date,
//     link,
//     section,

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
//     return `<li class="home__list-item">
//     <div class="home__list-top">
//         <p class="home__list-section">${section}</p>
//         <p class="home__list-is-read">Already read &#10004;</p>
//         <img width="353" height="395" class="home__list-img" src=${img} alt=${imgName}>
//         <button type="button" id="like" class="add-button remove-button">Add to favorite</button>
//     </div>
//     <div class="home__list-description">
//       <h2 class="home__list-title">${title}</h2>
//       <p class="home__list-text">${text}</p>
//     </div>
//     <div class="home__list-footer">
//       <p class="home__list-date">${date}</p>
//       <a href=${link} class="home__list-link">Read more</a>
//     </div>
//   </li>`;
//   }
//   return markup;
// }
// function renderCards() {
//   cardContainer.innerHTML = onLoad();
// }
// ------------------------------------------------------------------------------------------------------

cardContainer.children[0].remove();

cardContainer.addEventListener('click', onBtnReadMore);

function onBtnReadMore(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const newsCard = e.target.parentNode.parentNode;
  const section = newsCard.querySelector('.home__list-section').textContent;
  const img = newsCard.querySelector('.home__list-img').src;
  const alt = newsCard.querySelector('.home__list-img').alt;
  const title = newsCard.querySelector('.home__list-title').textContent;
  const text = newsCard.querySelector('.home__list-text').textContent;
  const date = newsCard.querySelector('.home__list-date').textContent;
  const link = newsCard.querySelector('.home__list-link').href;
  const dateOfRead = createNewData();

  const newsObj = {
    section,
    img,
    alt,
    title,
    text,
    date,
    link,

    isRead: true,
    dateOfRead,
  };

  try {
    const newsAllLocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (newsAllLocalStorage === null) {
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify([newsObj]));
      return;
    }

    if (newsAllLocalStorage !== null) {
      if (newsAllLocalStorage.every(news => news.link !== newsObj.link)) {
        newsAllLocalStorage.push(newsObj);
        localStorage.setItem(
          refs.KEY_LOCAL_STORAGE,
          JSON.stringify(newsAllLocalStorage)
        );
      }

      const newNewsAllLocalStorage = newsAllLocalStorage.reduce(
        (newArr, news) => {
          if (news.link === newsObj.link) {
            news.dateOfRead = createNewData();
            news.isRead = true;
          }
          newArr.push(news);
          return newArr;
        },
        []
      );
      localStorage.setItem(
        refs.KEY_LOCAL_STORAGE,
        JSON.stringify(newNewsAllLocalStorage)
      );
    }
  } catch (error) {
    console.error(error);
    container.innerHTML = getMarkupError();
  }

  function createNewData() {
    return new Date(Date.now()).toLocaleString().split(',')[0];
  }

  if (!newsCard.classList.contains('isRead')) {
    newsCard.classList.add('isRead');
  }
}
