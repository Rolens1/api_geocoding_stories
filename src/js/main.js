import { getCoordinates } from "./api/geocoding.js";

const cityInput = document.querySelector("#search_input")
const btnSearch = document.querySelector("#btn_search")

btnSearch.addEventListener("click", async () => {
    const cityName = cityInput.value.trim()
    console.log(cityName)
    if (cityInput.value.trim() === "") {
        console.log("Not Working")
    }

    try {
        const coords = await getCoordinates(cityInput)
        console.log("Coords :", coords)
    } catch (error) {
        console.log("Error geoloc:", error)
    }
})