const { connect } = require('./db');

async function getCart() {
    const db = await connect();
    return db.collection('cart').find({}).toArray();
}

async function addToCart(productId) {
    const db = await connect();
    const result = await db.collection('cart').insertOne({ productId });
    return result.insertedId;
}

module.exports = { getCart, addToCart };