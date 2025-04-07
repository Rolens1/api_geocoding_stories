export async function getCoordinates(city) {
  const apiKey = "b412e0fef649413ca0c4a63c9d5af09e";
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      city
    )}&key=${apiKey}`
  );
  const data = await res.json();
  if (!data.results || data.results.length === 0)
    throw new Error("Ville non trouvée.");
  return data.results[0].geometry;
}
