// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjGy0XX60cXk0ebdQ5EsvZoZrmaPyij8k",
  authDomain: "react-dragon-news-auth-f3df0.firebaseapp.com",
  projectId: "react-dragon-news-auth-f3df0",
  storageBucket: "react-dragon-news-auth-f3df0.appspot.com",
  messagingSenderId: "543065911439",
  appId: "1:543065911439:web:878a5b337df35a3c79c0fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
