// js/hackathons.js
const tilesData = [
  {
    title: "Wink AI challenge",
    description: "Automatic verification of the age category according to the scenario",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Wink_LOGO_2021.png",
    link: "https://github.com/IlyaElevrin/wink_ai_model"
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
