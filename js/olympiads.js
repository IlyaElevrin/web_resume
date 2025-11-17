const tilesData = [
  {
    title: "-",
    description: "-",
    image: "-",
    link: "-"
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