
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBKyN-1U9_4gbpM66Uaab1biVKOFMHQ5SE",
  authDomain: "client-list-a370f.firebaseapp.com",
  projectId: "client-list-a370f",
  storageBucket: "client-list-a370f.appspot.com",
  messagingSenderId: "941551879455",
  appId: "1:941551879455:web:1ecfcda19d46fa217b9c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
