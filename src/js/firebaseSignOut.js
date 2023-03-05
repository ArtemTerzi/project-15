import { getAuth, signOut } from 'firebase/auth';
import { auth, app, firebaseConfig } from './firebaseSignIn.js';
const btnSignOut = document.querySelector('.sign-out');
const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');
btnSignOut.addEventListener('click', onSignOut);
function onSignOut(evt) {
  evt.preventDefault();
  signOut(auth)
    .then(response => {
      btnOpenSignUp.classList.remove('is-hidden');
      btnOpenSignIn.classList.remove('is-hidden');
      btnSignOut.classList.add('is-hidden');
    })
    .catch(error => {});
}
