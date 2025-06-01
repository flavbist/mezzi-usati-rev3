import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQcE3-MInQ0cqfrEaAZc6ZlPYkidPijog",
  authDomain: "mezziusati-7f3af.firebaseapp.com",
  projectId: "mezziusati-7f3af",
  storageBucket: "mezziusati-7f3af.appspot.com",
  messagingSenderId: "250616706905",
  appId: "1:250616706905:web:98669a6bc4e6a1a4cffe48"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, getDocs, deleteDoc, doc, ref, uploadBytes, getDownloadURL };