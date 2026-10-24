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
