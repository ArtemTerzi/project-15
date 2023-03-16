import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const firebaseConfig = {
  apiKey: 'AIzaSyCkFvds2hJc9mUmc-_oFpHYsUcBiyM7opU',
  authDomain: 'my-awesome-project-news.firebaseapp.com',
  projectId: 'my-awesome-project-news',
  storageBucket: 'my-awesome-project-news.appspot.com',
  messagingSenderId: '220245139302',
  appId: '1:220245139302:web:1c8b0e871bf6f9c36032a7',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const modalForm = document.querySelector('.modal-form-sign-up');

const btnClose = document.querySelector('.btn-close-sign-up');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');
const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
const btnSignOut = document.querySelector('.sign-out');
const backdrop = document.querySelector('.backdrop-sign-up');
const inputPassword = document.querySelector('.password-sign-up');
const inputEmail = document.querySelector('.email-sign-up');
const signIn = document.querySelector('.sign-up');
modalForm.addEventListener('submit', onClick);
modalForm.addEventListener('input', onInput);
window.addEventListener('keyup', onCloseEsc);

function onClick(evt) {
  evt.preventDefault();
  const password = evt.target.elements.password.value.trim();
  const email = evt.target.elements.email.value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      backdrop.classList.toggle('is-hidden');
      btnOpenSignUp.classList.add('is-hidden');
      btnOpenSignIn.classList.add('is-hidden');
      btnSignOut.classList.toggle('is-hidden');
      Notify.success(`Welcome,${email}`);
    })
    .catch(err => {
      console.log(err.message);
      // Firebase: Error (auth/email-already-in-use).
      if (err.message === 'Firebase: Error (auth/invalid-email).') {
        Notify.failure(`Invalid email. Please provide correct email  `);
      } else if (
        err.message === 'Firebase: Error (auth/email-already-in-use).'
      ) {
        Notify.failure(`Email is already in use. Please use another email.`);
      }
    });
}

function onInput(evt) {
  const pswrd = inputPassword.value;
  const mail = inputEmail.value;
  if (pswrd.length >= 6 && mail.includes('@')) {
    signIn.disabled = false;
  } else {
    signIn.disabled = true;
  }
}

function onCloseEsc(evt) {
  const backdropOpen = !backdrop.classList.contains('is-hidden');
  if (backdropOpen && evt.code === 'Escape') {
    backdrop.classList.toggle('is-hidden');
  }
}

btnOpenSignUp.addEventListener('click', onClickOpenModal);
btnClose.addEventListener('click', onClickCloseModal);
function onClickOpenModal(evt) {
  evt.preventDefault();
  backdrop.classList.toggle('is-hidden');
  inputPassword.value = '';
  inputEmail.value = '';
}

function onClickCloseModal(evt) {
  evt.preventDefault();
  backdrop.classList.toggle('is-hidden');
  inputPassword.value = '';
  inputEmail.value = '';
  signIn.disabled = true;
}

export { auth, app, firebaseConfig };
