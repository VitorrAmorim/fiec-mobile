import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeCO75uaQSZc0_TCwGj9Cd4QlvwqFyBy4",
  authDomain: "fir-exercicio-f364e.firebaseapp.com",
  projectId: "fir-exercicio-f364e",
  storageBucket: "fir-exercicio-f364e.firebasestorage.app",
  messagingSenderId: "69029749636",
  appId: "1:69029749636:web:9ee348260c8ba5b552f3d1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };