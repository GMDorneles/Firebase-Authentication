import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkLftVGIsZZjE2ocm_Ddy58PqfgiBkxyA",
    authDomain: "fir-authentication-212e4.firebaseapp.com",
    projectId: "fir-authentication-212e4",
    storageBucket: "fir-authentication-212e4.appspot.com",
    messagingSenderId: "1074456963951",
    appId: "1:1074456963951:web:51f11950ff5e0bae41569a",
    measurementId: "G-6Z4E9TWJZH"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
