export async function getCoordinates(city) {
    // const apiKey = "b412e0fef649413ca0c4a63c9d5af09e"
    // const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`)
    // const data = await res.json()
    // if (!data.results || data.results.length === 0) throw new Error("City not Found")
    // console.log(data.results[0].geometry)
    // return data.results[0].geometry

    return {
        lat: 48.8555,
        lon: 2.3522,
        city: city
    }
}
