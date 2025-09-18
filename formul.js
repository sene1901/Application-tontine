 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCTU7jji6kWadAt9QiWFdD91DrwJ_e6ag4",
    authDomain: "projet-tontine.firebaseapp.com",
    projectId: "projet-tontine",
    storageBucket: "projet-tontine.firebasestorage.app",
    messagingSenderId: "433486239246",
    appId: "1:433486239246:web:adfb7d9da5ec354df9ce5f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // empêche le rechargement
  // ton code ici



    const tel = document.getElementById("telephone").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!tel || !pass) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (tel === "771234567" && pass === "1234") {
      alert("Connexion réussie");
      window.location.href = "index.html";
    } else {
      alert("Numéro ou mot de passe incorrect ");
    }
  });