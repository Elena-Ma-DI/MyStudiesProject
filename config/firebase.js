import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAadA6zGis4Q5A1ycAAfrTRWu7I6gGhrUs",
  authDomain: "eam3-99979.firebaseapp.com",
  projectId: "eam3-99979",
  storageBucket: "eam3-99979.appspot.com",
  messagingSenderId: "393815573970",
  appId: "1:393815573970:web:e2b23a41b0538ae990340b",
  measurementId: "G-F7DYW4F944"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

const coursesCollection = collection(db, "courses");
const usersCollection = collection(db, "user");
const declarationsCollection = collection(db, "dhlwsh");
const aitisiCollection = collection(db, "aitisi");

// Για την βαθμολογία που μπορούν να βάλουν οι καθηγητές στους φοιτητές (επιλογή από dropdown)
const EamCollection = collection(db, "EAM"); 
const SxbdCollection = collection(db, "SXBD");


export { coursesCollection, usersCollection, declarationsCollection, EamCollection, SxbdCollection, aitisiCollection};