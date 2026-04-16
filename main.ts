import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series-tbody")!;
const averageElement: HTMLElement = document.getElementById("average")!;
const detailCard: HTMLElement = document.getElementById("detail-card")!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie: Serie) => {
    const tr: HTMLTableRowElement = document.createElement("tr");
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

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;

  series.forEach((serie: Serie) => {
    totalSeasons += serie.seasons;
  });

  return totalSeasons / series.length;
}

function renderSeasonsAverage(series: Serie[]): void {
  const average: number = getSeasonsAverage(series);
  averageElement.innerHTML = `Seasons average: ${average}`;
}

function showSerieDetail(serie: Serie): void {
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

function clearRowSelection(): void {
  const rows = seriesTbody.querySelectorAll("tr");
  rows.forEach((row) => row.classList.remove("table-active"));
}

renderSeriesInTable(series);
renderSeasonsAverage(series);