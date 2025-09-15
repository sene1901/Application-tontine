document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a, .accordion-body a");
  const content = document.getElementById("main-content");

  function loadPage(page) {
    fetch(page)
      .then(res => res.text())
      .then(data => {
        content.innerHTML = data;
      })
      .catch(() => {
        content.innerHTML = "<p class='text-danger'>Erreur de chargement...</p>";
      });
  }

  // Charger Dashboard par défaut
  loadPage("dashboard.html");

  // Gestion des clics
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      if (page) {
        loadPage(page);

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});

