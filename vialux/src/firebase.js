import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDFzrjj0DoeG2UFIFd1qe7hV8JS-mBdKCk",
    authDomain: "vialux-91973.firebaseapp.com",
    projectId: "vialux-91973",
    storageBucket: "vialux-91973.appspot.com",
    messagingSenderId: "435265460708",
    appId: "1:435265460708:web:74b005cf5fbee514fb0ff1"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth()

export { auth }