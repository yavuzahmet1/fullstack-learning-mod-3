const { getProducts, addProduct, deleteProduct } = require('./productModule');
const { getCart, addToCart } = require('./cartModule');

async function main() {
    // Ürün ekleme
    const newProduct = { name: 'Laptop', price: 1200 };
    const productId = await addProduct(newProduct);
    console.log('Yeni ürün eklendi. ID:', productId);

    // Ürünleri listeleme
    const products = await getProducts();
    console.log('Ürünler:', products);

    // Sepete ürün ekleme
    const cartItemId = await addToCart(productId);
    console.log('Sepete ürün eklendi. ID:', cartItemId);

    // Sepeti listeleme
    const cart = await getCart();
    console.log('Sepet:', cart);

    // Ürün silme
    const deletedCount = await deleteProduct(productId);
    console.log('Silinen ürün sayısı:', deletedCount);
}

main().catch(console.error);