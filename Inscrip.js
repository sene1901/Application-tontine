 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDObiwE5F61to8zeCeRFMmmjCqbUySdr6g",
    authDomain: "projet-tontine-js.firebaseapp.com",
    projectId: "projet-tontine-js",
    storageBucket: "projet-tontine-js.firebasestorage.app",
    messagingSenderId: "187299151948",
    appId: "1:187299151948:web:7c43d06cd9713482adb4e9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("connection reussie")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });