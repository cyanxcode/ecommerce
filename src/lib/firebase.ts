// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiYIhKKCEl8dBK9AVGRbpTyZS3U20BbXs",
  authDomain: "ladieshaat-4fffd.firebaseapp.com",
  projectId: "ladieshaat-4fffd",
  storageBucket: "ladieshaat-4fffd.appspot.com",
  messagingSenderId: "1025501390091",
  appId: "1:1025501390091:web:b6699bcaa3b3ac73732e0e",
  measurementId: "G-HVD73BN88C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);