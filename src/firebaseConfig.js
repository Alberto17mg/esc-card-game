
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDsAoaxY8T5Xb0GfgjdMnFnQvjwRe_5Wyw",
  authDomain: "esc-card-game-29fca.firebaseapp.com",
  databaseURL: "https://esc-card-game-29fca-default-rtdb.firebaseio.com",
  projectId: "esc-card-game-29fca",
  storageBucket: "esc-card-game-29fca.firebasestorage.app",
  messagingSenderId: "54268497620",
  appId: "1:54268497620:android:2ef37d5641d55f352bb541"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
