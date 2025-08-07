// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOPVkLmJsOsUeTYz0KrgS_XyjbkjSRkWI",
  authDomain: "taatom-dc9fa.firebaseapp.com",
  projectId: "taatom-dc9fa",
  storageBucket: "taatom-dc9fa.firebasestorage.app",
  messagingSenderId: "522716626735",
  appId: "1:522716626735:web:9c6151cc203d1a3f652bda",
  measurementId: "G-TWL03JXS33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

