// Tableau des images (fixées par jour)
const images = [
  "images/1.jpeg",
  "images/2.jpeg",
  "images/3.jpeg",
  "images/4.jpeg",
  "images/5.jpeg",
  "images/6.jpeg",
  "images/7.jpeg",
  "images/8.jpeg",
  "images/9.jpeg",
  "images/10.jpeg",
  "images/11.jpeg",
  "images/12.jpeg",
  "images/13.jpeg",
  "images/14.jpeg",
  "images/15.jpeg",
  "images/16.jpeg",
  "images/17.jpeg",
  "images/18.jpeg",
  "images/19.jpeg",
  "images/20.jpeg",
  "images/21.jpeg",
  "images/22.jpeg",
  "images/23.jpeg",
  "images/24.jpeg"
];

// Mélanger les indices des cases (ordre aléatoire)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mélange des indices (1 à 24)
const shuffledIndices = shuffle([...Array(24).keys()]); // [0, 1, ..., 23]

// Réorganiser les cases dans le DOM
const calendar = document.getElementById("calendar");
const cases = Array.from(document.querySelectorAll(".case"));
shuffledIndices.forEach((shuffledIndex, i) => {
  const caseElement = cases[shuffledIndex];
  calendar.appendChild(caseElement); // Réorganise les cases
});

// Ajouter les images fixes aux cases
cases.forEach((caseElement, index) => {
  const day = index + 1; // Jour associé à la case
  const imageUrl = images[index]; // Image correspondante

  // Structure des faces avant et arrière
  caseElement.innerHTML = `
    <div class="case-inner">
      <div class="case-front">${day}</div>
      <div class="case-back">
        <img src="${imageUrl}" alt="Surprise du jour ${day}">
      </div>
    </div>
  `;

  // Action au clic
  caseElement.addEventListener("click", () => {
    alert(`🎉 Découvrez votre surprise pour le jour ${day}!`);
  });
});
