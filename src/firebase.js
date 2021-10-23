import "firebase/compat/auth";

import "firebase/compat/database";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC8SrkqOPIkHjXYPVs1AgAJIZbcw26IVmk",
  authDomain: "tapped-project.firebaseapp.com",
  projectId: "tapped-project",
  storageBucket: "tapped-project.appspot.com",
  messagingSenderId: "693094593694",
  appId: "1:693094593694:web:10d29f13640003abfbf78f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

// export const database = getDatabase();

// const db = getFirestore(app);

// export const auth = app.auth();

export default app;
