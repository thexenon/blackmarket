// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ9tHjHCivg-Nv29yTHmCj8WfeIl2Rutc",
  authDomain: "black-market-a7ddd.firebaseapp.com",
  databaseURL: "https://black-market-a7ddd-default-rtdb.firebaseio.com",
  projectId: "black-market-a7ddd",
  storageBucket: "black-market-a7ddd.appspot.com",
  messagingSenderId: "216140470866",
  appId: "1:216140470866:web:51f337856a2f214b60dd8b",
  measurementId: "G-6TF8F46CCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
