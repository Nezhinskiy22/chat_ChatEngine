import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAGaQnRajGL9y0Bkkr2-IZHt79mA90m0xE",
    authDomain: "unichat-d5b0c.firebaseapp.com",
    projectId: "unichat-d5b0c",
    storageBucket: "unichat-d5b0c.appspot.com",
    messagingSenderId: "714081049939",
    appId: "1:714081049939:web:98f361ba567343fbdf95a6",
  })
  .auth();
