import { series } from "./data.js";
const seriesTbody = document.getElementById("series-tbody");
const averageElement = document.getElementById("average");
const detailCard = document.getElementById("detail-card");
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";
        tr.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tr.addEventListener("click", () => {
            clearRowSelection();
            tr.classList.add("table-active");
            showSerieDetail(serie);
        });
        seriesTbody.appendChild(tr);
    });
}
function getSeasonsAverage(series) {
    let totalSeasons = 0;
    series.forEach((serie) => {
        totalSeasons += serie.seasons;
    });
    return totalSeasons / series.length;
}
function renderSeasonsAverage(series) {
    const average = getSeasonsAverage(series);
    averageElement.innerHTML = `Seasons average: ${average}`;
}
function showSerieDetail(serie) {
    detailCard.innerHTML = `
    <div class="card shadow-sm">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" class="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  `;
}
function clearRowSelection() {
    const rows = seriesTbody.querySelectorAll("tr");
    rows.forEach((row) => row.classList.remove("table-active"));
}
renderSeriesInTable(series);
renderSeasonsAverage(series);
//# sourceMappingURL=main.js.map