 document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const tel = document.getElementById("telephone").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!tel || !pass) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (tel === "771234567" && pass === "1234") {
      alert("Connexion réussie ✅");
      window.location.href = "dashboard.html";
    } else {
      alert("Numéro ou mot de passe incorrect ❌");
    }
  });