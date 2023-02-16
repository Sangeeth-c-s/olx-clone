import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApWV-B7IKRtMeuR3ifZ9nyyAM_JQxb8a0",
  authDomain: "olxclone-87962.firebaseapp.com",
  projectId: "olxclone-87962",
  storageBucket: "olxclone-87962.appspot.com",
  messagingSenderId: "380494961016",
  appId: "1:380494961016:web:99fe294c61e89c6856108d",
  measurementId: "G-C8NK7VGKMJ",
};


export default firebase.initializeApp(firebaseConfig);
