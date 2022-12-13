// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM4qVjqjpLLT9XQmSvHP6z1rLTxNAKE3Y",
  authDomain: "productionmove-3cd59.firebaseapp.com",
  projectId: "productionmove-3cd59",
  storageBucket: "productionmove-3cd59.appspot.com",
  messagingSenderId: "827165608448",
  appId: "1:827165608448:web:37eaca636f028f05cae6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;