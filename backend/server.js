const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

app.use('/api/artists', artistRoutes);
app.use('/api/albums', albumRoutes);

app.listen(3000, () => {
    console.log('Server avviato su porta 3000');
});