const path=require("path")
const express = require('express');
const router = express.Router();

// GET /admin/add-product
router.get('/add-product', (req, res) => {

    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
//   res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// POST /admin/add-product
router.post('/add-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; 

//? 1. router.get() Kullanımı

// router.get("/add-product", (req, res, next) => {
//   res.send("<form>...</form>");
// });
// Sadece GET isteklerine yanıt verir
// Belirli bir route için kullanılır
// HTTP metoduna özel işlemlerde tercih edilir

//? 2. router.use() Kullanımı
// router.use("/add-product", (req, res, next) => {
//   res.send("<form>...</form>");
// });
// Tüm HTTP metodlarına (GET, POST, PUT, DELETE vb.) yanıt verir
// Middleware olarak kullanılabilir
// Daha genel amaçlı işlemler için uygundur

// HTTP de Method özgürlüğünde router.get() önde,
// Middleware desteğinde router.use() tam destekli,
// performansda router.get() daha hızlı.

// router.use() =>Logging, authentication gibi genel işlemlerde kullanabiliriz.

//?Performans ve Best Practice
// Metod özgüllüğü her zaman daha iyidir - get(), post() gibi metodları kullanın

//* use() daha çok:
// Middleware'ler için
// Route gruplama için
// Tüm metodlara aynı yanıtı vermeniz gereken durumlar için

// Sektör standardı: RESTful API'lerde metod-spesifik route'lar (get, post, put, delete) kullanmak daha yaygın ve tercih edilen yöntemdir.