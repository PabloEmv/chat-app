
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBS7z6v6RcV5kj_kY18EJ_UylmK8DbRO8E",
  authDomain: "chat-app-8f2a5.firebaseapp.com",
  projectId: "chat-app-8f2a5",
  storageBucket: "chat-app-8f2a5.appspot.com",
  messagingSenderId: "257517228784",
  appId: "1:257517228784:web:890f2dfb3f09854842e835",
  measurementId: "G-V9EYC8M1L8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
