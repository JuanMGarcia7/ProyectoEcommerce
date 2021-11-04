import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiRypKoJDXOs_nmh8Sg4ykYPhdjY06kUk",
  authDomain: "e-commerce-fbb03.firebaseapp.com",
  projectId: "e-commerce-fbb03",
  storageBucket: "e-commerce-fbb03.appspot.com",
  messagingSenderId: "781413197400",
  appId: "1:781413197400:web:b2582a257f31447ae3cc2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
