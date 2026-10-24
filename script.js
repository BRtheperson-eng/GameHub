const searchInput = document.querySelector("#game-search");
const gameCards = [...document.querySelectorAll(".game-card")];
const noResults = document.querySelector("#no-results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  gameCards.forEach((card) => {
    const searchableText = `${card.dataset.search || ""} ${card.innerText}`.toLowerCase();
    const matches = searchableText.includes(searchTerm);
    card.hidden = !matches;
    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
});


// Load games marked with data-game-url inside the homepage player.
const gamePlayer = document.querySelector("#game-player");
const gameFrame = document.querySelector("#game-frame");
const playerTitle = document.querySelector("#player-title");
const closeGameButton = document.querySelector("#close-game");

document.querySelectorAll("[data-game-url]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    playerTitle.textContent = link.dataset.gameTitle || "Now Playing";
    gameFrame.src = link.dataset.gameUrl;
    gamePlayer.hidden = false;
    gamePlayer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

closeGameButton.addEventListener("click", () => {
  gameFrame.src = "about:blank";
  gamePlayer.hidden = true;
});
