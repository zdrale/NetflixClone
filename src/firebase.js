import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApHPOHDacjBLAHXWFqNnpTp76JNhdSWq8",
  authDomain: "netflix-clone-8b9d4.firebaseapp.com",
  projectId: "netflix-clone-8b9d4",
  storageBucket: "netflix-clone-8b9d4.appspot.com",
  messagingSenderId: "880427339318",
  appId: "1:880427339318:web:15b6b24e7a239e90e71297",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword };
export default db;
