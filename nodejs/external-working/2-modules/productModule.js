const { connect } = require('./db');

async function getProducts() {
    const db = await connect();
    return db.collection('products').find({}).toArray();
}

async function addProduct(product) {
    const db = await connect();
    const result = await db.collection('products').insertOne(product);
    return result.insertedId;
}

async function deleteProduct(productId) {
    const db = await connect();
    const result = await db.collection('products').deleteOne({ _id: productId });
    return result.deletedCount;
}

module.exports = { getProducts, addProduct, deleteProduct };