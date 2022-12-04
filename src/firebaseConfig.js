import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA9CA80xUXLnupBRnOYtIsndoWzcdL1tZM",
  authDomain: "hashcrew-70f04.firebaseapp.com",
  projectId: "hashcrew-70f04",
  storageBucket: "hashcrew-70f04.appspot.com",
  messagingSenderId: "695804555489",
  appId: "1:695804555489:web:a915b19ad3e1f16a9587a0"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseConfig);
console.log(firebaseApp);

var db1 = firebaseApp.firestore();
export { db1 };

export const app = initializeApp(firebaseConfig);
console.log(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
// export const db = firebaseConfig.firestore(app);
