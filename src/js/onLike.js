import { refs } from './refs';

export default function onLike(e) {
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
        for (const news of newsArr) {
          if (news.link === myObject.link) {
            news.isFavorite = true;
            return;
          }
        }
      }
      newsArr.push(myObject);
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
    } catch (error) {
      console.log(error);
    }
  } else if (e.target.classList.contains('add-button')) {
    e.target.classList.toggle('remove-button');
    e.target.textContent = 'Add to favorite';
    try {
      const newsArr = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));
      for (const news of newsArr) {
        if (news.link === myObject.link) {
          news.isFavorite = false;
        }
      }
      localStorage.setItem(refs.KEY_LOCAL_STORAGE, JSON.stringify(newsArr));
    } catch (error) {
      console.error(error);
    }
  }
}
