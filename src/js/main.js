import { getCoordinates } from "./api/geocoding.js";
import { getImage } from "./api/pixabay.js"

const cityInput = document.querySelector("#search_input")
const btnSearch = document.querySelector("#btn_search")

btnSearch.addEventListener("click", async () => {
    const cityName = cityInput.value.trim()
    console.log(cityName)
    if (cityInput.value.trim() === "") {
        console.log("Not Working")
    }

    try {
        const coords = await getCoordinates(cityName)
        console.log("Coords :", coords)
        renderStory(cityName)
    } catch (error) {
        console.log("Error geoloc:", error)
    }
})


async function renderStory(city, containerId = 'main_story') {
    const image = await getImage(city);
    const container = document.getElementById(containerId);
  
    container.innerHTML = `
      <div class="story">
        <h2>${city}</h2>
        ${image ? `<img src="${image}" alt="${city}">` : ''}
    `;
  }