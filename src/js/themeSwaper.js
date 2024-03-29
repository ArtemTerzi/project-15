const body = document.querySelector('body');
const themeWrapperLight = document.querySelector('.theme-wrapper--light');
const themeWrapperDark = document.querySelector('.theme-wrapper--dark');
const checkboxArray = document.querySelectorAll('.checkbox');

let checked = localStorage.getItem('checked');

themeSwitcherToggle(checked);

body.addEventListener('click', e => {
  if (
    e.target.classList.contains('checkbox') ||
    e.target.classList.contains('checkbox__switcher')
  ) {
    onCheckboxClick();
  }
  return;
});

function onCheckboxClick() {
  checked === 'true' ? (checked = 'false') : (checked = 'true');

  themeSwitcherToggle(checked);
  localStorage.setItem('checked', checked);
}

function themeSwitcherToggle(checked) {
  if (checked === 'true') {
    body.classList.add('dark-theme');
    themeWrapperLight.classList.remove('switch-on');
    themeWrapperDark.classList.add('switch-on');
    checkboxArray.forEach(el => el.classList.add('checkbox-on'));
  } else {
    body.classList.remove('dark-theme');
    themeWrapperLight.classList.add('switch-on');
    themeWrapperDark.classList.remove('switch-on');
    checkboxArray.forEach(el => el.classList.remove('checkbox-on'));
  }
}

// import { initializeApp } from 'firebase/app';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   setDoc,
//   updateDoc,
// } from 'firebase/firestore';
// import { firebaseConfig, app, db } from './firebaseData';

// async function set() {
//   await setDoc(doc(db, 'theme', 'UI'), {
//     theme: true,
//   });
// }
// // set();

// const UI = doc(db, 'theme', 'UI');

// async function change(value) {
//   await updateDoc(UI, {
//     theme: value,
//   });
// }

// async function get() {
//   return await getDocs(collection(db, 'theme'));
// }

// ////////////////////////////////////////////////////////////

// const body = document.querySelector('body');
// const themeWrapperLight = document.querySelector('.theme-wrapper--light');
// const themeWrapperDark = document.querySelector('.theme-wrapper--dark');
// const checkboxArray = document.querySelectorAll('.checkbox');
// let checked = null;

// get().then(response => {
//   response.forEach(doc => {
//     checked = doc._document.data.value.mapValue.fields.theme.booleanValue;
//   });
//   themeSwitcherToggle(checked);
// });

// body.addEventListener('click', onClickChangeTheme);

// function onClickChangeTheme(e) {
//   if (
//     e.target.classList.contains('checkbox') ||
//     e.target.classList.contains('checkbox__switcher')
//   ) {
//     onCheckboxClick();
//   }
//   return;
// }

// function onCheckboxClick() {
//   checked === true ? (checked = false) : (checked = true);

//   change(checked).then(response => {
//     themeSwitcherToggle(checked);
//   });
// }

// function themeSwitcherToggle(themeStatus) {
//   if (themeStatus === true) {
//     body.classList.add('dark-theme');
//     themeWrapperLight.classList.remove('switch-on');
//     themeWrapperDark.classList.add('switch-on');
//     checkboxArray.forEach(el => el.classList.add('checkbox-on'));
//   } else {
//     body.classList.remove('dark-theme');
//     themeWrapperLight.classList.add('switch-on');
//     themeWrapperDark.classList.remove('switch-on');
//     checkboxArray.forEach(el => el.classList.remove('checkbox-on'));
//   }
// }
