const express = require("express");
const app = express();

// Body parser middleware (modern Express ile built-in)
app.use(express.urlencoded({ extended: false }));

// GET /add-product - Formu göster
app.get("/add-product", (req, res, next) => {
    console.log("In add-product middleware!");
    res.send('<form action="/product" method="POST"> <input type="text" name="title"/><button>Add Product</button></form>');
});

// POST /product - Form verisini işle
app.post("/product", (req, res, next) => {
    console.log(req.body); // Form verisini logla
    res.redirect("/");
});

// GET / - Ana sayfa
app.get("/", (req, res, next) => {
    console.log("In home middleware!");
    res.send('<h1>Hello from express</h1>');
});

app.listen(8000);

//? body-parer Nedir?

// body-parser, Express.js uygulamalarında gelen HTTP isteklerinin gövdesini (body) ayrıştırmak için kullanılan bir middleware'dir. Node.js/Express, gelen isteklerin body kısmını otomatik olarak işlemez - bu verilere erişmek için bir parser'a ihtiyaç duyar.

//* app.use(bodyParser.urlencoded({extended: false}))

//?URL-encoded verileri işler: HTML formlarından gönderilen veriler genellikle application/x-www-form-urlencoded formatındadır (örneğin: name=John&age=30). Bu middleware bu formatı JavaScript nesnesine çevirir.

// {extended: false} seçeneği:

//     false ayarlandığında, querystring modülü kullanılır (basit parsing)

//     true ayarlandığında, qs modülü kullanılır (daha karmaşık nesneleri destekler)

//     false seçeneği genellikle basit key-value çiftleri için yeterlidir

//? Ne işe Yarar 
// bu şekildeki form
{/* <form action="/submit-form" method="POST">
  <input type="text" name="username">
  <input type="password" name="password">
  <button type="submit">Gönder</button>
</form> */}

// Bu middleware olmadan req.body boş olurdu ({}). Middleware eklendiğinde, req.body şöyle olur:

// {
//     username: "girilen değer",
//     password: "girilen şifre"
//   }