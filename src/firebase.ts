// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvEPO8jojr4HIKA8vcTy6FJsAAtFPPEjg',
  authDomain: 'starbucks-de356.firebaseapp.com',
  projectId: 'starbucks-de356',
  storageBucket: 'starbucks-de356.appspot.com',
  messagingSenderId: '103081008843',
  appId: '1:103081008843:web:031a24c252518fd050c54e',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
