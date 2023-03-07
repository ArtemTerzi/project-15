import { Paginator } from './js/paginator';
import './js/categoryListMaker';
import './js/paginator';
import { startWeather } from './js/weather/weather';
import { fetchMostPopular } from './js/fetchMostPopular';
import { getNormalizeResponse } from './js/fetches/getNormalizeResponse';
import { fetchByInputSerchAndDate } from './js/fetchByInputAndDate';
import { getMarkup } from './js/fetches/getMarkup';
import { fetchByChoosenCategories } from './js/fetchByCategories';
import { renderMarkupError } from './js/renderMarkupError';
// import './js/firebaseData';

const searchFormElem = document.querySelector('.header__form');

// const URL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=lviv&api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g&';

function renderByDefault() {
  fetchMostPopular()
    .then(response => {
      if (response.status != 200) throw new Error(response.status);
      const {
        data: { results },
      } = response;
      const responseURL = response.config.url;
      const data = getNormalizeResponse(results, responseURL);
      const paginator = new Paginator();
      paginator.getRespForPagination(response, responseURL, data);
    })
    .catch(error => {
      console.error(error);
      renderMarkupError('.home__inner');
    });
}

renderByDefault();

// 		} = response;
// 	const responseURL = response.config.url;
// 	const paginator = new Paginator();
// 	paginator.getURL(responseURL);
// 	paginator.getRespForPagination(responseURL);
// 	const data = getNormalizeResponse(results, responseURL);
// 	list.insertAdjacentHTML("beforeend", getMarkup(data));
// });

function renderByInputAndDate() {
  fetchByInputSerchAndDate()
    .then(answer => {
      if (answer.status != 200) throw new Error(response.status);

      const {
        data: {
          response: { docs },
        },
      } = answer;
      const responseURL = answer.config.url;
      const paginator = new Paginator();
      const data = getNormalizeResponse(docs, responseURL);
      paginator.getRespForPagination(answer, responseURL, data);
    })
    .catch(error => {
      console.error(error);
      renderMarkupError('.home__inner');
    });
}

// renderByInputAndDate();

// 	} = answer;
// 	const responseURL = answer.config.url;
// 	const paginator = new Paginator();
// 	paginator.getURL(responseURL);
// 	paginator.getRespForPagination(responseURL);
// 	const data = getNormalizeResponse(docs, URL);
// 	// list.insertAdjacentHTML("beforeend", getMarkup(data))
// 	console.log(data);
// });

//TODO NEED TO CHANGE TO CATEGORIES FETCH (BUTTON)

// function onSubmitSearchForm(event) {
//   event.preventDefault();
//   const inputSaerch = event.currentTarget.elements.search.value;

//   fetchByChoosenCategories(inputSaerch)
//     .then(response => {
//       if (response.status != 200) throw new Error(response.status);

//       const {
//         data: { results },
//       } = response;
//       const responseURL = response.config.url;
//       const data = getNormalizeResponse(results, responseURL);
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//       renderMarkupError('.home__inner');
//     });
// }

// searchFormElem.addEventListener('submit', onSubmitSearchForm);

//! END HERE

// startWeather();
//? =====================================================================
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCkFvds2hJc9mUmc-_oFpHYsUcBiyM7opU',
//   authDomain: 'my-awesome-project-news.firebaseapp.com',
//   projectId: 'my-awesome-project-news',
//   storageBucket: 'my-awesome-project-news.appspot.com',
//   messagingSenderId: '220245139302',
//   appId: '1:220245139302:web:1c8b0e871bf6f9c36032a7',
// };

// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export async function addDataDB() {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       theme: 'Ada',
//       array: 'Lovelace',
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }
// async function readDataDB() {
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach(doc => {
//     console.log(doc._document.data.value.mapValue.fields.array);
//     // console.log('Document written with ID: ', docRef.id);
//     console.log(doc.id);
//   });
// }

// // doc._document.data.value.mapValue.fields.array.stringValue = 'hihiahahaha';

// // addDataDB();
// readDataDB();

//? =======================================================================

// const app = initializeApp(firebaseConfig);
// let auth = getAuth();
// export { auth, app, firebaseConfig };
// const modalForm = document.querySelector('.modal-form-sign-in');
// const btnOpen = document.querySelector('[data-modal-open]');
// const btnClose = document.querySelector('.btn-close-sign-in');
// const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
// const btnSignOut = document.querySelector('.sign-out');
// const backdrop = document.querySelector('.backdrop-sign-in');
// const inputPassword = document.querySelector('.password-sign-in');
// const inputEmail = document.querySelector('.email-sign-in');
// const signIn = document.querySelector('.sign-in');

// modalForm.addEventListener('submit', onClick);
// modalForm.addEventListener('input', onInput);
// window.addEventListener('keyup', onCloseEsc);

// function onClick(evt) {
//   evt.preventDefault();
//   const password = evt.target.elements.password.value.trim();
//   const email = evt.target.elements.email.value.trim();

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(response => {
//       backdrop.classList.toggle('is-hidden');
//       btnOpen.classList.add('is-hidden');
//       btnOpenSignUp.classList.add('is-hidden');
//       btnSignOut.classList.toggle('is-hidden');
//       Notify.success(`Welcome,${email}`);
//     })
//     .catch(err => {
//       if (err.message === 'Firebase: Error (auth/invalid-email).') {
//         Notify.failure(`Invalid email. Please provide correct email  `);
//       }
//     });
// }

// function onInput(evt) {
//   const pswrd = inputPassword.value;
//   const mail = inputEmail.value;
//   if (pswrd.length >= 6 && mail.includes('@')) {
//     signIn.disabled = false;
//   } else {
//     signIn.disabled = true;
//   }
// }

// function onCloseEsc(evt) {
//   const backdropOpen = !backdrop.classList.contains('is-hidden');
//   if (backdropOpen && evt.code === 'Escape') {
//     backdrop.classList.toggle('is-hidden');
//   }
// }

// btnOpen.addEventListener('click', onClickOpenModal);
// btnClose.addEventListener('click', onClickCloseModal);
// function onClickOpenModal(evt) {
//   evt.preventDefault();
//   backdrop.classList.toggle('is-hidden');
//   inputPassword.value = '';
//   inputEmail.value = '';
// }

// function onClickCloseModal(evt) {
//   evt.preventDefault();
//   backdrop.classList.toggle('is-hidden');
//   inputPassword.value = '';
//   inputEmail.value = '';
//   signIn.disabled = true;
// }
