const tilesData = [
  {
    title: "Mathlib",
    description: "Library of mathematical lectures, articles, and books.",
    image: "https://www.math.lsu.edu/~contest/logos/LSUMathContestLogo2016.png",
    link: "https://github.com/IlyaElevrin/mathlib"
  }
];

function renderTiles() {
  const container = document.getElementById('tiles');
  container.innerHTML = tilesData.map(tile => `
    <div class="tile-wrapper">
      <a href="${tile.link}" class="tile-link" target="_blank">
        <div class="tile">
          <img src="${tile.image}" alt="${tile.title}" />
          <div class="tile-overlay">
            <p>${tile.description}</p>
          </div>
        </div>
      </a>
      <div class="tile-title">${tile.title}</div>
    </div>
  `).join('');
}

renderTiles();