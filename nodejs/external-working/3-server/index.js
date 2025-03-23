// Asenkron ve event-driven (olay tabanlı) bir yapıya sahiptir, bu da yüksek performanslı ve ölçeklenebilir uygulamalar geliştirmeyi kolaylaştırır.

const http = require('http');

const server = http.createServer((req, res) => {
    // Ana sayfa
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Ana Sayfa');
    }
    // Hakkında sayfası
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hakkında Sayfası');
    }
    // 404 Sayfa Bulunamadı
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Sayfa Bulunamadı');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});