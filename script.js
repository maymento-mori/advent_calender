// Ajouter les numéros des jours aux cases
document.querySelectorAll('.case').forEach((caseElement, index) => {
  const day = index + 1;
  caseElement.innerText = day;

  // Ajouter une action lorsque la case est ouverte
  caseElement.addEventListener('click', () => {
    alert(`🎉 Joyeux jour ${day}!`);
  });
});
