const http=require("http");
const express=require("express");

const app=express();


// Middleware Zinciri (Chaining)

// Middleware'ler sırayla çalışır. Eğer bir middleware next() çağırırsa, bir sonraki middleware tetiklenir:
app.use((req, res, next) => {
    console.log("Middleware çalıştı!");
    next(); // Bir sonraki middleware'e geç
  });
  app.get("/admin", (req, res, next) => {
    if (!req.user.isAdmin) return res.status(403).send("Yetkiniz yok!");
    next();
  });

//Eğer next() çağrılmazsa, zincir durur:
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Bir hata oluştu!");
  });

//   Örnek: Kimlik Doğrulama Middleware
  // Kullanıcı giriş yapmış mı kontrol eden middleware
const authMiddleware = (req, res, next) => {
    if (req.headers["authorization"]) {
      console.log("Kullanıcı doğrulandı");
      next();
    } else {
      res.status(401).send("Giriş yapmalısınız!");
    }
  };
  
  // Sadece "/dashboard" route'unda çalışır
  app.get("/dashboard", authMiddleware, (req, res) => {
    res.send("Dashboard Sayfası");
  });

//   Middleware'ler, Express'te istek-yanıt döngüsünü kontrol etmek için kullanılır.

//*   app.use() ile global, app.get(), app.post() gibi metodlarla route bazlı middleware eklenebilir.

//!   next() ile bir sonraki middleware'e geçilir, res.send() gibi yanıtlar zinciri sonlandırır.

//? Express'te middleware kullanarak loglama, yetkilendirme, veri doğrulama gibi işlemleri merkezi bir şekilde yönetebilirsiniz.

  const server=http.createServer(app);
  
  server.listen(3000)

