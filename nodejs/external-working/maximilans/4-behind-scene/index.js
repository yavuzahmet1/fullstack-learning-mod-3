
//? 1. Middleware'lerin Çalışma Mantığı

// Express, bir HTTP isteği (request) aldığında, middleware'leri sırayla (FIFO - First In First Out) işler. Her middleware şu 3 şeyi yapabilir:

//     Request veya Response nesnelerini değiştirebilir (Örn: req.user eklemek).

//     İşlemi sonlandırabilir (Örn: res.send() ile yanıt döndürmek).

//     Bir sonraki middleware'e geçebilir (next() çağırarak).

// 2. Arkada Neler Oluyor? (Call Stack & Event Loop)

// Express, middleware'leri bir yığın (stack) mantığıyla çalıştırır. İşlem adımları:
// a) Middleware Yığını Oluşturma

// Express uygulaması başlatıldığında, tüm middleware'ler bir yığın (stack) içine eklenir:

// Örnek yığın:
// [
//     morgan(),       // Loglama middleware'i
//     express.json(), // JSON parser
//     authMiddleware, // Özel middleware
//     routeHandler    // Son işleyici (controller)
//   ]

// b) İstek Geldiğinde Yığının İşlenmesi

//     HTTP isteği gelir (Örn: GET /).

//     Sırayla middleware'ler çalışır:

//         İlk middleware çalışır (morgan log yapar).

//         next() çağrılırsa, bir sonraki middleware'e geçilir (express.json).

//         Eğer bir middleware res.send() veya res.json() ile yanıt verirse, zincir durur.

//     Hata olursa, next(err) ile error-handler middleware'e atlanır.

// c) next() Nasıl Çalışır?

// next(), bir sonraki middleware'i çağıran bir fonksiyondur. JavaScript'in event loop'u ile senkron/asenkron yürütülür:

// app.use(async (req, res, next) => {
//     console.log("Middleware 1");
//     await next(); // Sonraki middleware bitene kadar bekler (async/await ile)
//     console.log("Middleware 1 sonrası");
//   });
  
//   app.use((req, res, next) => {
//     console.log("Middleware 2");
//     next();
//   });

// çıktı:
// Middleware 1
// Middleware 2
// Middleware 1 sonrası

// b) Hata Yönetimi (next(err))
// javascript
// Copy

// app.use((req, res, next) => {
//   try {
    // ?Bir hata oluşursa
//     throw new Error("Bir hata!");
//   } catch (err) {
//     next(err); // Error-handler'a atla
//   }
// });

// //? Hata işleyici (4 parametre alır)
// app.use((err, req, res, next) => {
//   res.status(500).send("Hata oluştu: " + err.message);
// });

// c) Async Middleware'ler

// Eğer bir middleware asenkron ise, next()'i doğru kullanmalısınız:

// app.use(async (req, res, next) => {
//   await someAsyncTask();
//   next(); // Sonraki middleware'e geç
// });

//* Yanlış Kullanım:

// app.use(async (req, res, next) => {
//   await someAsyncTask();
//   //? next() unutulursa, istek asla yanıt alamaz (timeout olur)
// });

// 4. Performans & Optimizasyon

// !    Middleware sırası önemlidir! Sık kullanılanları (örneğin express.json()) en üste koyun.

// !    Gereksiz middleware'lerden kaçının (her middleware, her istekte çalışır).

// !    Error-handler'lar en sonda olmalıdır.

//? Özet: Middleware Nasıl Çalışır?

//     Middleware'ler bir yığın (stack) halinde sırayla çalışır.

//     Her middleware next() ile bir sonrakini tetikler.

//     Eğer res.send() veya res.json() ile yanıt verilirse, zincir durur.

//     Hata durumunda next(err) ile error-handler'a geçilir.

//     Async/await ile next() kontrol edilmezse, istek "asılı" kalabilir.

// //? 1. Önce temel middleware'ler
// app.use(express.json()); // JSON verilerini parse et
// app.use(cors()); // CORS ayarlarını uygula
// app.use(morgan("dev")); // HTTP isteklerini logla

// //? 2. Sonra route'lar
// app.post("/api/users", (req, res) => {
//   console.log(req.body); // Artık çalışır (body parse edildi)
//   res.send("Kullanıcı oluşturuldu");});

//? 3. Neden express.json() En Üste Koyulmalı?

//     req.body'e erişmek için önce veriyi parse etmek gerekir.

//         Eğer express.json() route'lardan sonra tanımlanırsa, POST isteklerinde req.body boş gelir.

//?    Performans optimizasyonu:

//     Gereksiz yere tüm middleware'lerin çalışmasını engeller. Örneğin, geçersiz bir JSON gönderildiğinde, en başta hata verip işlemi durdurabilir.

//?     Güvenlik:
//     Bazı middleware'ler (örneğin helmet), güvenlik önlemlerini erken uygulamak için en üste konulmalıdır.

//! Error Handler En Sonda Olmalı

// app.get("/", (req, res) => {
//   throw new Error("Bir hata oluştu!");
// });

// //? En sona hata yöneticisi
// app.use((err, req, res, next) => {
//   res.status(500).send("Hata: " + err.message);
// });

// Neden?

//     Hata yakalayıcı middleware, tüm hataları toplamak için en sonda olmalıdır.

//* express.json() gibi temel middleware'ler en üste konulmalı, çünkü diğer route'ların doğru çalışması için gerekli ön işlemleri yaparlar.

//* Yanlış sıralama, req.body'nin boş gelmesine, güvenlik açıklarına veya performans sorunlarına yol açabilir.

//* Error handler'lar her zaman en sonda olmalıdır.

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app1 = express();

// 1. Temel middleware'ler
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// 2. Route'lar
app.post("/api/data", (req, res) => {
  console.log(req.body); // Doğru çalışır
  res.json({ success: true });
});

// 3. 404 Handler
app.use((req, res) => {
  res.status(404).send("Sayfa bulunamadı!");
});

// 4. Error Handler
app.use((err, req, res, next) => {
  res.status(500).send("Bir hata oluştu: " + err.message);
});

app1.listen(3000, () => console.log("Sunucu çalışıyor!"));