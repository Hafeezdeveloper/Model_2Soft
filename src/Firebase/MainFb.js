// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaDzJydD63ZV94y1AuCslAWN4i3NvYxO8",
  authDomain: "apple-web-95776.firebaseapp.com",
  databaseURL: "https://apple-web-95776-default-rtdb.firebaseio.com",
  projectId: "apple-web-95776",
  storageBucket: "apple-web-95776.appspot.com",
  messagingSenderId: "769349764569",
  appId: "1:769349764569:web:b5c784534358635a4fc5c8",
  measurementId: "G-1CF9YJQWFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;