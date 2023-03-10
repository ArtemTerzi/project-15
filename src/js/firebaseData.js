import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCkFvds2hJc9mUmc-_oFpHYsUcBiyM7opU',
  authDomain: 'my-awesome-project-news.firebaseapp.com',
  projectId: 'my-awesome-project-news',
  storageBucket: 'my-awesome-project-news.appspot.com',
  messagingSenderId: '220245139302',
  appId: '1:220245139302:web:1c8b0e871bf6f9c36032a7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addDataDB() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      theme: 'Ada',
      array: 'Lovelace',
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
async function readDataDB() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {});
}
