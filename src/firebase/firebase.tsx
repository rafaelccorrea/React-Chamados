import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlbNT3vqkCAJ7OwPxbLrJ33fLyTPYQ_y0",
  authDomain: "my-chamados-rc.firebaseapp.com",
  projectId: "my-chamados-rc",
  storageBucket: "my-chamados-rc.appspot.com",
  messagingSenderId: "533814335770",
  appId: "1:533814335770:web:991bb1321257614e94b4a3",
  measurementId: "G-V5SY7H3YMC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
