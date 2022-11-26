// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByfXizNucolYOajKjTLhfK9v8-Y0zx5gk",
  authDomain: "fir-fern-herr-yt.firebaseapp.com",
  projectId: "fir-fern-herr-yt",
  storageBucket: "fir-fern-herr-yt.appspot.com",
  messagingSenderId: "164110312690",
  appId: "1:164110312690:web:408d6afe75e3f4e29a9c6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
