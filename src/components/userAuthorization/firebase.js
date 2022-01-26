// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu7-8QeorOw814y9cqFS_1s3vwJPSs87E",
  authDomain: "react-movie-e3147.firebaseapp.com",
  projectId: "react-movie-e3147",
  storageBucket: "react-movie-e3147.appspot.com",
  messagingSenderId: "42861137742",
  appId: "1:42861137742:web:5ad8ec95a9f57292abd81f",
  measurementId: "G-09D8F3C8GG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db=firebaseApp.fireStore();
const auth=firebase.auth();
export{db,auth}