const tilesData = [
  {
    title: "Graph Visual Repo",
    description: "The script is a browser extension for visualizing repositories on the contributor's page.",
    image: "https://raw.githubusercontent.com/IlyaElevrin/graph_visual_repo/refs/heads/main/example.png",
    link: "https://github.com/IlyaElevrin/graph_visual_repo"
  },
  {
    title: "WB parsing",
    description: "Wildberries parsing in google sheets of seller cards and cards from the main page (of the client).",
    image: "https://opora.ru/site/assets/files/51446/vb.1536x1152.webp",
    link: "https://github.com/IlyaElevrin/wb_parsing"
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