 // Switch tableau selon la carte
       document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card-stats');
  const tables = document.querySelectorAll('.table-container');

  if (cards.length && tables.length) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Désactiver toutes les cartes
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Masquer tous les tableaux
        const tableId = card.getAttribute('data-table');
        tables.forEach(t => t.classList.add('d-none'));

        // Afficher le tableau correspondant
        const target = document.getElementById('table-' + tableId);
        if (target) target.classList.remove('d-none');
      });
    });
  }
});
