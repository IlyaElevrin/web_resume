const tilesData = [
  {
    title: "Data Visualization",
    description: "Kaggle",
    image: "https://raw.githubusercontent.com/IlyaElevrin/certificates/refs/heads/main/Ilya%20Chugynov%20-%20Data%20Visualization.png",
    link: "https://github.com/IlyaElevrin/certificates/blob/main/Ilya%20Chugynov%20-%20Data%20Visualization.png"
  },
  {
    title: "Intro to Machine Learning",
    description: "Kaggle",
    image: "https://raw.githubusercontent.com/IlyaElevrin/certificates/refs/heads/main/Ilya%20Chugynov%20-%20Intro%20to%20Machine%20Learning.png",
    link: "https://github.com/IlyaElevrin/certificates/blob/main/Ilya%20Chugynov%20-%20Intro%20to%20Machine%20Learning.png"
  },
  {
    title: "Introduction to Data Science and Machine Learning",
    description: "Stepik",
    image: "https://stepik.org/certificate/188053ab5a6690d8fd3094775be1a6f6140209f4.png?language=en&resolution=low",
    link: "hhttps://stepik.org/cert/2645904?lang=en"
  },
  {
    title: "Basics of statistics",
    description: "Stepik",
    image: "https://stepik.org/certificate/3594ee30f4a5d0c9e39aa2490cce63e94bbd85f1.png?language=en&resolution=low",
    link: "https://stepik.org/cert/2538691?lang=en"
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    description: "Accenture North America",
    image: "js/cert/cert1.png",
    link: "https://github.com/IlyaElevrin/certificates/blob/main/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_cBvmuNKXd29t7GPLu_1718301125680_completion_certificate.pdf"
  },
  {
    title: "Pandas",
    description: "Kaggle",
    image: "https://raw.githubusercontent.com/IlyaElevrin/certificates/refs/heads/main/Ilya%20Chugynov%20-%20Pandas.png",
    link: "https://github.com/IlyaElevrin/certificates/blob/main/Ilya%20Chugynov%20-%20Pandas.png"
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