import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanger-db1af.firebaseapp.com",
  projectId: "taskmanger-db1af",
  storageBucket: "taskmanger-db1af.firebasestorage.app",
  messagingSenderId: "778865846458",
  appId: "1:778865846458:web:e1b608ac64c37a79257a83"
};

export const app = initializeApp(firebaseConfig);



