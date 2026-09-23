const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query("SELECT * FROM artist");
    return rows;
};

exports.create = async (artist) => {
    const { name, genre, country } = artist;
    await db.query(
        "INSERT INTO artist(name,genre,country) VALUES (?,?,?)",
        [name, genre, country]
    );
};

exports.update = async (id, artist) => {
    const { name, genre, country } = artist;
    await db.query(
        "UPDATE artist SET name=?, genre=?, country=? WHERE id=?",
        [name, genre, country, id]
    );
};

exports.remove = async (id) => {
    await db.query("DELETE FROM artist WHERE id=?", [id]);
};