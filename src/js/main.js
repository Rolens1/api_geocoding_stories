// Import the needed components to make the app work
import { getCountryCode } from "./api/geocoding.js";
import { getImage } from "./api/pixabay.js";
import { getWeather } from "./api/weather.js";
import { getWiki } from "./api/wiki.js";

// Initialize the required elements 
const cityInput = document.querySelector("#search_input");
const formSearch = document.getElementById("form_search");

// Waiting for a form submit, since we do a fetch call from an api
// We will need to do async to wait for the datas to load 
formSearch.addEventListener("submit", async (e) => {
  e.preventDefault();

  // trim the input value to not have spaces
  const search_ = cityInput.value.trim();

  // if no search_
  if (!search_) {
    return;
  }

  // if search_
  try {
    // get the story from wikipedia
    const story = await getWiki(search_)
    // call a function that will render a html element with all the descriptive
    await renderStory(search_, story)

  } catch (error) {
    console.log("Error loading search", error);
  }
});

async function renderStory(userInput, story, containerId = "main_story") {
  // get the needed elements to put inside the story container
  const image = await getImage(userInput);
  const container = document.getElementById(containerId);
  const countryCode = await getCountryCode(userInput)
  const flag_link = `https://flagsapi.com/${countryCode}/flat/64.png`
  
  // activate the active class for the form search
  formSearch.classList.add("active")

  // put the new div inside the #main_story placeholder div element in the html
  container.innerHTML = `
    <div class="story-card">
      <div class="story-header">
        <h2>${userInput}</h2>
         ${countryCode ? `<img src="${flag_link}" alt="${userInput}" class="city-flag">` : ''}
      </div>
      ${image ? `<img src="${image}" alt="${userInput}" class="city-image">` : ''}
      <p>${story}</p>
    </div>`;
}

// See if the input changes, if it changes and it is empty, we remove the active class
cityInput.addEventListener("input", () => {
    if (cityInput.value.trim() === '') {
        formSearch.classList.remove('active');
    } else {
        formSearch.classList.add('active');
    }
});
