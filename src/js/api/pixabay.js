// This API will get an image with the description of the input search box
export async function getImage(city) {
    const apiKey = 'PIXABAY KEY';
    const res = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(city)}&image_type=photo`);
    const data = await res.json();
    return data.hits && data.hits.length > 0 ? data.hits[0].webformatURL : '';
  }