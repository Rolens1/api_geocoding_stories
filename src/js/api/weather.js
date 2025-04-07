// Key
const apiKey = 'b0e5920c8d27bc3a999bbed7bccbf92a';

// This can be used to get the current temp of the searched place inside the input box
// We get the lat and the lon from the opencage API, geocoding.js
export async function getWeather(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    const data = await res.json()

    // console.log(data.weather[0].main)
    console.log(data.main)
    // data.main.temp | data.main.feels_like
}