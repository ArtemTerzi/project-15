//themeswiper
import { initializeApp } from 'firebase/app';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';

import { app, firebaseConfig, auth } from './firebaseSignUp.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCkFvds2hJc9mUmc-_oFpHYsUcBiyM7opU',
  authDomain: 'my-awesome-project-news.firebaseapp.com',
  projectId: 'my-awesome-project-news',
  storageBucket: 'my-awesome-project-news.appspot.com',
  messagingSenderId: '220245139302',
  appId: '1:220245139302:web:1c8b0e871bf6f9c36032a7',
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { firebaseConfig, app, auth, db, provider };
