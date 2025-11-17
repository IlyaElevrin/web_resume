const tilesData = [
  {
    title: "Synthetic data generation",
    description: "Generation of synthetic data with preservation of associative links from real data.",
    image: "https://ydata.ai/hs-fs/hubfs/Blog%20YData/Featured%20Images/abstract_generating_synthetic_data.webp%3Fwidth=1158&height=623&name=abstract_generating_synthetic_data.webp",
    link: "https://github.com/IlyaElevrin/synthetic_data_generation"
  },
  {
    title: "DeepCore",
    description: "Deepcore is a library for datascience and for data manipulation. The deep.foundation project helps data scientists work with associative data models.",
    image: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/43c/8b1/b36/43c8b1b36ce92b6cf1cf2b402efd95d8.png",
    link: "https://github.com/IlyaElevrin/deepcore"
  },
  {
    title: "DeepVC",
    description: "A powerful Python library and web application for working with associative link data structures, providing visualization, analysis, and conversion tools for links notation (LINO) data.",
    image: "https://storage.googleapis.com/s4a-prod-share-preview/default/st_app_screenshot_image/a3cba21f-0ec5-430a-8836-63da706aae0a/Raw_App_Screenshot.png?nf_resize=smartcrop&w=240&h=130",
    link: "https://github.com/deep-foundation/deepvc"
  },
  {
    title: "DeepVisual",
    description: "DeepVisual is a Python library for creating advanced visualizations of graphs and links. It provides intuitive and flexible tools for visualizing different types of links.",
    image: "https://raw.githubusercontent.com/deep-foundation/deep-visual/refs/heads/main/doc/pages/pages_img/visualize_link_doublet.png",
    link: "https://github.com/deep-foundation/deep-visual"
  },
  {
    title: "Titanic",
    description: "Titanic - Basic kaggle competition.",
    image: "https://camo.githubusercontent.com/340ff5de6eae76195314f60242cbc80617ac7d3e73008121f79c0f186efa4fd0/68747470733a2f2f737461746963312e73717561726573706163652e636f6d2f7374617469632f3530303634353366653462303965663232353262613036382f742f3530393062323439653462303437626135346466643235382f313335313636303131333137352f544974616e69632d537572766976616c2d496e666f677261706869632e6a70673f666f726d61743d3135303077",
    link: "https://github.com/IlyaElevrin/titanic"
  },
  {
    title: "Hammer",
    description: "A naive Bayesian classifier for spam annihilation.",
    image: "https://i.ytimg.com/vi/lFJbZ6LVxN8/maxresdefault.jpg",
    link: "https://github.com/IlyaElevrin/hammer"
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