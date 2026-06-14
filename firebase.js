import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey:
  "AIzaSyAsTqgFCIiScj9ytXzUlhoRY1EJuM_huic",

  authDomain:
  "parentalcontrol-b710a.firebaseapp.com",

  databaseURL:
  "https://parentalcontrol-b710a-default-rtdb.firebaseio.com",

  projectId:
  "parentalcontrol-b710a",

  storageBucket:
  "parentalcontrol-b710a.firebasestorage.app",

  messagingSenderId:
  "427792048126",

  appId:
  "1:427792048126:android:da6bdd79666bb8c1e6eaaf"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);