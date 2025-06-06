// API key
const apiKey = "GEO CODING KEY";

// Was supposed to be used to put the weather API when fetching a city
// Not yet implemented but can be added
export async function getCoordinates(city) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      city
    )}&key=${apiKey}`
  );
  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error("Ville non trouvée.");
  return data.results[0].geometry;
    // return data.results[0].components["ISO_3166-1_alpha-2"]
}

// Get the country code to fetch a flag from another API
export async function getCountryCode(city) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      city
    )}&key=${apiKey}`
  );
  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error("Ville non trouvée.");
//   return data.results[0].geometry;
    return data.results[0].components["ISO_3166-1_alpha-2"]
    
}