const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query(`
        SELECT 
            album.*,
            artist.name AS artist_name,
            artist.genre AS artist_genre
        FROM album
        JOIN artist ON album.artist_id = artist.id
    `);
    return rows;
};

exports.create = async (album) => {
    const { title, year_release, price, artist_id } = album;
    await db.query(
        "INSERT INTO album(title,year_release,price,artist_id) VALUES (?,?,?,?)",
        [title, year_release, price, artist_id]
    );
};

exports.update = async (id, album) => {
    const { title, year_release, price, artist_id } = album;
    await db.query(
        "UPDATE album SET title=?, year_release=?, price=?, artist_id=? WHERE id=?",
        [title, year_release, price, artist_id, id]
    );
};

exports.remove = async (id) => {
    await db.query("DELETE FROM album WHERE id=?", [id]);
};