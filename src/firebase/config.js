
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJ_v31Hy59fXDBZCzg006wmbHc_wQ2KO4",
  authDomain: "proyectochjgomez.firebaseapp.com",
  projectId: "proyectochjgomez",
  storageBucket: "proyectochjgomez.appspot.com",
  messagingSenderId: "144538524204",
  appId: "1:144538524204:web:179aa844f9ab5f794b0f89"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;