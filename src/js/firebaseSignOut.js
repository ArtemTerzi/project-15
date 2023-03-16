import { initializeApp } from 'firebase/app'; //
import { app, firebaseConfig, auth } from './firebaseData';
import { getAuth, signOut } from 'firebase/auth';

const btnSignOut = document.querySelector('.sign-out');
const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');
btnSignOut.addEventListener('click', onSignOut);

function onSignOut() {
  signOut(auth)
    .then(response => {
      btnOpenSignUp.classList.remove('is-hidden');
      btnOpenSignIn.classList.remove('is-hidden');
      btnSignOut.classList.add('is-hidden');
    })
    .catch(error => {
      console.log(error);
    });
}
