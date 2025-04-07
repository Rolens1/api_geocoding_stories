import { getCoordinates, getCountryCode } from "./api/geocoding.js";
import { getImage } from "./api/pixabay.js";
import { getWeather } from "./api/weather.js";
import { getWiki } from "./api/wiki.js";

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
    const story = await getWiki(cityName)
    await renderStory(cityName, story)
    console.log(coords)
    const weather = await getWeather(coords.lat, coords.lng)

    console.log(weather)

  } catch (error) {
    console.log("Erreur geo loc", error);
  }
});

async function renderStory(city, story, containerId = "main_story") {
  const image = await getImage(city);
  const container = document.getElementById(containerId);
  const countryCode = await getCountryCode(city)
  const flag_link = `https://flagsapi.com/${countryCode}/flat/64.png`
  

  formSearch.classList.add("active")

  container.innerHTML = `
    <div class="story-card">
      <div class="story-header">
        <h2>${city}</h2>
        <img src="${flag_link}" alt="${city}" class="city-flag">
      </div>
      ${image ? `<img src="${image}" alt="${city}" class="city-image">` : ''}
      <p>${story}</p>
    </div>`;
}

// Gestion de l'input
cityInput.addEventListener("input", () => {
    if (cityInput.value.trim() === '') {
        formSearch.classList.remove('active');
    } else {
        formSearch.classList.add('active'); // Important : ajoute la classe quand il y a du texte
    }
});

// Gestion du focus pour une meilleure UX
cityInput.addEventListener("focus", () => {
    formSearch.classList.add('active');
});

