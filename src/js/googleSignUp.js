import {
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';
import { auth, provider } from './firebaseData';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnGoogleSingUp = document.querySelector('[google-sign-up]');

const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
const btnSignOut = document.querySelector('.sign-out');
const backdrop = document.querySelector('.backdrop-sign-up');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');

btnGoogleSingUp.addEventListener('click', handleClickGoogleAuth);

function handleClickGoogleAuth() {
  signInWithPopup(auth, provider)
    .then(result => {
      const userName = result.user.displayName;
      backdrop.classList.toggle('is-hidden');
      btnOpenSignUp.classList.add('is-hidden');
      btnSignOut.classList.toggle('is-hidden');
      btnOpenSignIn.classList.add('is-hidden');
      Notify.success(`Welcome,${userName}`);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
