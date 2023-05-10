// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC6CkD3LY8-mGApVmU93EFN10QA6pSYG8",
  authDomain: "clients-blogs.firebaseapp.com",
  projectId: "clients-blogs",
  storageBucket: "clients-blogs.appspot.com",
  messagingSenderId: "179145334995",
  appId: "1:179145334995:web:d307f8aa0f8f7843c4b426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;