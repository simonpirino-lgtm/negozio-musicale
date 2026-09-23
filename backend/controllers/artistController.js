const service = require('../services/artistService');

exports.getAll = async (req, res) => {
    try {
        const data = await service.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        await service.create(req.body);
        res.json({ message: "Artista inserito" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        await service.update(req.params.id, req.body);
        res.json({ message: "Artista aggiornato" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        await service.remove(req.params.id);
        res.json({ message: "Artista eliminato" });
    } catch (err) {
        res.status(500).json({ errore: err.message });
    }
};