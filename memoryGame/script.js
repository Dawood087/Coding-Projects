document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const resetButton = document.getElementById("reset-button");

  // Symbole / Paare
  const cardValues = [
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍋",
    "🥝",
    "🍓",
    "🍍",
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍋",
    "🥝",
    "🍓",
    "🍍",
  ];

  let cards = []; // Array das alle Kartenobjekte speichert
  let flippedCards = [];
  let matchedCards = 0; // Zähler für gefundene Paare

  function initializeGame() {
    gameBoard.innerHTML = "";
    flippedCards = [];
    matchedCards = 0;

    // Mischt die Kartenwerte
    const shuffledValues = shuffleArray(cardValues);

    // Grid Spalten anpassen basierend auf der Anzahl der Karten
    // z.B. 16 Karten = 4x4
    const numColumns = Math.sqrt(shuffledValues.length);
    gameBoard.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

    shuffledValues.forEach((value, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.value = value;
      card.dataset.index = index;

      // Innere Struktur einer Karte
      card.innerHTML = `
      <div class="card-inner">
      <div class="card-back">?</div> <div class="card-face">${value}</div> </div>
      `;

      card.addEventListener("click", () => flipCard(card));

      gameBoard.appendChild(card);
      cards.push(card);
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Tausche Elemente
    }
    return array;
  }

  function flipCard(card) {
    // Wenn die Karte bereits umgedreht oder gefunden wurde, oder schon zwei Karten offen sind, nichts tun
    if (
      flippedCards.length < 2 &&
      !card.classList.contains("flipped") &&
      !card.classList.contains("matched")
    ) {
      card.classList.add(
        "flipped"
      ); /* Fügt Flipped Klasse hinzu, welche im CSS die flip-Animation macht */
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800); // Kurze Pause, damit der Spieler die zweite Karte sehen kann
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const value1 = card1.dataset.value;
    const value2 = card2.dataset.value;

    if (value1 === value2) {
      // Karten stimmen überein
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards += 2;

      // Alle Karten gefunden
      if (matchedCards === cardValues.length) {
        setTimeout(() => {
          alert("Glückwunsch! Du hast alle Paare gefunden!");
        }, 500);
      }
    } else {
      // Karten stimmen nicht überein -> drehe sie nach kurzer Zeit wieder zurück
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
    }
    // Liste der umgedrehten Karten für nächste Runde leeren
    flippedCards = [];
  }
  resetButton.addEventListener("click", initializeGame);

  // Spiel beim Laden der seite starten
  initializeGame();
});
