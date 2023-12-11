let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("youtube_data_update_csv/data_sci_tech.csv")
    .then((response) => response.text())
    .then((data) => {
      const videos = parseCSV(data);
      videos.forEach((video) => {
        createVideoCard(video);
      });
    });
});

function parseCSV(csvData) {
  const rows = csvData.split("\n");
  
  return rows.slice(1, -1).map((row) => {
    const [title, embed_code, views, likes, upload_date, summary] =
      row.split("\t");
    return { title, embed_code, views, likes, upload_date, summary };
  });
}


function createVideoCard(video) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="container">
      <iframe width="430" height="310" src="${video.embed_code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="details">
      <div class="views-duration">
        <span>${video.views}</span>
        •
        <span>${video.upload_date}</span>
      </div>
      <h3>${video.title}</h3>
      <p>${video.summary}</p>
    </div>
  `;

  document.querySelector(".cards").appendChild(card);
}
