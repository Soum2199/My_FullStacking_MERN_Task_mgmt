import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmDGs2cOv4vClH2tmYDX8dCfL32tROYlI",
  authDomain: "ademotodoapps.firebaseapp.com",
  projectId: "ademotodoapps",
  storageBucket: "ademotodoapps.firebasestorage.app",
  messagingSenderId: "674784001584",
  appId: "1:674784001584:web:77332977a3d5259efeb7f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();