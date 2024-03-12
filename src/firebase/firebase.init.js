// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuaH-oLwQbN5bILJ8tGSTY2pTUdvUnizY",
    authDomain: "blog-website-using-react-897b9.firebaseapp.com",
    projectId: "blog-website-using-react-897b9",
    storageBucket: "blog-website-using-react-897b9.appspot.com",
    messagingSenderId: "1013698743909",
    appId: "1:1013698743909:web:3430b41cdfe5033738808c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;