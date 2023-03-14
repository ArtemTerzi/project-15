import { signInWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { auth, app, firebaseConfig } from './firebaseData';

const modalForm = document.querySelector('.modal-form-sign-in');
const btnOpen = document.querySelector('.btn-open-sign-in');
const btnOpenSignIn = document.querySelector('.btn-open-sign-in');
const btnSignOut = document.querySelector('.sign-out');
const btnClose = document.querySelector('.btn-close-sign-in');
const backdrop = document.querySelector('.backdrop-sign-in');
const inputPassword = document.querySelector('.password-sign-in');
const inputEmail = document.querySelector('.email-sign-in');
const signUp = document.querySelector('.sign-in');

modalForm.addEventListener('submit', onClick);

function onClick(evt) {
  evt.preventDefault();
  const password = evt.target.elements.password.value.trim();
  const email = evt.target.elements.email.value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      backdrop.classList.toggle('is-hidden');
      btnOpen.classList.add('is-hidden');
      btnOpenSignIn.classList.add('is-hidden');
      btnSignOut.classList.toggle('is-hidden');
      Notify.success(`Welcome back, ${email}`);
    })
    .catch(err => {
      console.log(err.message);
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        Notify.failure(`User not found`);
      } else if (err.message === 'Firebase: Error (auth/wrong-password).') {
        Notify.failure(`Wrong password. Please provide correct password`);
      }
    });
}

btnOpen.addEventListener('click', onClickOpenModal);
btnClose.addEventListener('click', onClickCloseModal);
window.addEventListener('keyup', onCloseEsc);
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
}

function onCloseEsc(evt) {
  const backdropOpen = !backdrop.classList.contains('is-hidden');
  if (backdropOpen && evt.code === 'Escape') {
    backdrop.classList.toggle('is-hidden');
  }
}
