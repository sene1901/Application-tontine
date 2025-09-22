  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

  // Config Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDObiwE5F61to8zeCeRFMmmjCqbUySdr6g",
    authDomain: "projet-tontine-js.firebaseapp.com",
    projectId: "projet-tontine-js",
    storageBucket: "projet-tontine-js.appspot.com",
    messagingSenderId: "187299151948",
    appId: "1:187299151948:web:7c43d06cd9713482adb4e9"
  };

  // Init
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const inscrire = document.getElementById("submit");

  inscrire.addEventListener("click", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const dateNaissance = document.getElementById("dateNaissance").value;
    const profession = document.getElementById("profession").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;
    const organisation = document.getElementById("organisation").value;

    // Vérif mot de passe
    if (password !== confirmPassword) {
      alert("❌ Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      // Création compte Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Sauvegarde infos dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        nom,
        prenom,
        dateNaissance,
        profession,
        telephone,
        adresse,
        organisation,
        email,
        createdAt: new Date()
      });

      alert("✅ Inscription réussie !");
      window.location.href = "connexion.html";

    } catch (error) {
      console.error(error);
      alert("Erreur : " + error.message);
    }
  });
