// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT0VOEE4NJp9s1pSKDBDTK7ijJm4yJSQY",
  authDomain: "aaaa-6af4b.firebaseapp.com",
  databaseURL: "https://aaaa-6af4b.firebaseio.com",
  projectId: "aaaa-6af4b",
  storageBucket: "aaaa-6af4b.appspot.com",
  messagingSenderId: "152354258062",
  appId: "1:152354258062:web:1faad711201fb613801ddf",
  measurementId: "G-7M13JWQTR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
