// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-eHAtufprbzXBk_P2MWBTwlXtUUwafPY",
  authDomain: "firstproject-c1c86.firebaseapp.com",
  projectId: "firstproject-c1c86",
  storageBucket: "firstproject-c1c86.appspot.com",
  messagingSenderId: "884245965641",
  appId: "1:884245965641:web:50ef4be79981e2851c0898",
  measurementId: "G-T4PGWH5YJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)