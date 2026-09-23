const BASE_URL = 'http://localhost:3000/api/artists';

export async function getArtists() {
    const response = await fetch(BASE_URL);
    return await response.json();
}