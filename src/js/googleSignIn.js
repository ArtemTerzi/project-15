import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { auth, provider } from './firebaseData';

const btnGoogleSingIn = document.querySelector('[google-sign-in]');
const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
const btnSignOut = document.querySelector('.sign-out');
const backdrop = document.querySelector('.backdrop-sign-up');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');

btnGoogleSingIn.addEventListener('click', handleClickGoogleAuth);

function handleClickGoogleAuth(evt) {
  signInWithRedirect(auth, provider)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.message);
    });
}

function getData() {
  getRedirectResult(auth)
    .then(result => {
      console.log(result);
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //   const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
getData();
// function getData() {
//   getRedirectResult(auth)
//     .then(result => {
//       //   console.log(result);
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       console.log('getData ~ credential:', credential);
//       const token = credential.accessToken;
//       console.log('getData ~ token:', token);

//       // The signed-in user info.
//       const user = result.user;
//       console.log('getData ~ user:', user);
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     })
//     .catch(error => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData?.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }
// getData();

// 1. При регистрации пользователя или входа в аккаунт ранее созданый, должны рендерится новые страницы html с одной кнопкой Sign out при нажатии которой страница с двумя кнопками рендерится назад.
// 2. Все ровно сделать ЛокалСТоредж для темы, так как запрос длится 3 секунды на сервер для ее изменения. Использовать firestore для загрузки темы с других устройств паралельно с локалстореджем.
// 3. Подумать над логкиой входа пользователя и сохранения для этого пользователя темы на сайте.
// 4. Тянуть массив данных пользователя, то есть коллекцию, которую создавать пре регистрации пользователя. Перебирать ее и доставать оттуда значение темы для этого пользователя
// 5. При нажатии на кнопку входа через google страница обновляется, что не плохо так как можно прописать логику для рендереа новой страницы, если обновление происходит не раньше чем рендер новой.
