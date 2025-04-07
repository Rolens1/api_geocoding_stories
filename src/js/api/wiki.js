// Get a summary of the searched input from wikipedia
export async function getWiki(city) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.extract || "Resume not found";
}
  