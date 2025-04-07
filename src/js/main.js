import { getCoordinates } from "./api/geocoding.js";
import { getImage } from "./api/pixabay.js";

const cityInput = document.querySelector("#search_input");
const btnSearch = document.querySelector("#btn_search");
const formSearch = document.getElementById("form_search");

// console.log("Go");

formSearch.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityName = cityInput.value.trim();
  console.log(cityName);

  if (!cityName) {
    console.log("Veuillez entrer ville");
    return;
  }

  try {
    const coords = await getCoordinates(cityName);
    console.log(coords);
  } catch (error) {
    console.log("Erreur geo loc", error);
  }
});

async function renderStory(city, containerId = "main_story") {
  const image = await getImage(city);
  const container = document.getElementById(containerId);

  container.innerHTML = `
      <div class="story">
        <h2>${city}</h2>
        ${image ? `<img src="${image}" alt="${city}">` : ""}
    `;
}
