document.querySelectorAll('.case').forEach((caseElement) => {
    caseElement.addEventListener('click', () => {
      const day = caseElement.dataset.day;
      alert(`Contenu du jour ${day} : Joyeux Noël !`);
      // Ici, tu pourras charger du contenu spécifique pour chaque jour
    });
  });
  