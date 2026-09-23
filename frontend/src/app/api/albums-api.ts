const BASE_URL = 'http://localhost:3000/api/albums';

export async function getAlbums() {
    const response = await fetch(BASE_URL);
    return await response.json();
}

export async function addAlbum(album: any) {
    await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album)
    });
}

export async function deleteAlbum(id: number) {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
}