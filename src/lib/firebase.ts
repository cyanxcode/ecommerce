
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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