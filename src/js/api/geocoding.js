const apiKey = "b412e0fef649413ca0c4a63c9d5af09e";

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