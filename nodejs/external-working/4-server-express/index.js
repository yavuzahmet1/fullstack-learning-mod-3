const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Ana Sayfa');
});

app.get('/about', (req, res) => {
    res.send('Main Page');
});

app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT} address working`);
});