const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // MongoDB bağlantı URI'si
const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

let db;

async function connect() {
    if (!db) {
        await client.connect();
        db = client.db('ecommerce'); // Veritabanı adı
        console.log('Veritabanına bağlanıldı.');
    }
    return db;
}

module.exports = { connect };