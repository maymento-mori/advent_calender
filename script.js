// Tableau des GIFs (fixés par jour)
const gifs = [
  "gifs/1.gif",
  "gifs/2.gif",
  "gifs/3.gif",
  "gifs/4.gif",
  "gifs/5.gif",
  "gifs/6.gif",
  "gifs/7.gif",
  "gifs/8.gif",
  "gifs/9.gif",
  "gifs/10.gif",
  "gifs/11.gif",
  "gifs/12.gif",
  "gifs/13.gif",
  "gifs/14.gif",
  "gifs/15.gif",
  "gifs/16.gif",
  "gifs/17.gif",
  "gifs/18.gif",
  "gifs/19.gif",
  "gifs/20.gif",
  "gifs/21.gif",
  "gifs/22.gif",
  "gifs/23.gif",
  "gifs/24.gif"
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

// Ajouter les GIFs fixes aux cases
cases.forEach((caseElement, index) => {
  const day = index + 1; // Jour associé à la case
  const gifUrl = gifs[index]; // GIF correspondant

  // Structure des faces avant et arrière
  caseElement.innerHTML = `
    <div class="case-inner">
      <div class="case-front">${day}</div>
      <div class="case-back">
        <img src="${gifUrl}" alt="Surprise du jour ${day}">
      </div>
    </div>
  `;

  // Action au clic
  caseElement.addEventListener("click", () => {
    alert(`🎉 Découvrez votre surprise pour le jour ${day}!`);
  });
});
