// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNqBQOhWXKmZ5TELqTciVrnV2NVB1X7p0",
  authDomain: "aichatbot-b6ac3.firebaseapp.com",
  projectId: "aichatbot-b6ac3",
  storageBucket: "aichatbot-b6ac3.firebasestorage.app",
  messagingSenderId: "913716832971",
  appId: "1:913716832971:web:1d4716b7eda90a9e79094e",
  measurementId: "G-4DPVREW9VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Correctly export auth
const auth = getAuth(app);
export { auth };