# Middleware
## Express.js'de middleware'lar, uygulamanızın istek-yanıt (request-response) döngüsüne müdahale etmek ve bu süreci özelleştirmek için kullanılan fonksiyonlardır. Middleware'lar olmadan, bir web uygulamasının temel ihtiyaçlarını karşılamak zor olurdu.

## 1-Gelen HTTP isteklerini aşamalı olarak işlemek için kullanılır (örneğin, body parsing, authentication, logging). öreneğin; express.json() middleware'ı, gelen JSON verilerini otomatik oalrak js objesine çevirir

## 2-Kimlik doğrulama (Authentication): Kullanıcı girişi kontrolü yaparak yetkisiz erişimi engeller.

function authMiddleware(req, res, next) {
  if (req.headers.token === 'secret') next();
  else res.status(403).send('Yetkiniz yok!');
}
app.get('/admin', authMiddleware, (req, res) => { ... });

## Loglama (Logging): Her isteği kaydederek hata ayıklama ve analiz yapmayı sağlar. 
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
## Hata Yönetimi (Error Handling): Hataları merkezi bir şekilde yakalayıp yönetmek için özel middleware'lar kullanılır.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Sunucu hatası!');
});

### Middleware'lar, Express.js'de modüler ve yeniden kullanılabilir kod yazmayı sağlar. İstek işleme sürecini parçalara ayırarak daha temiz ve yönetilebilir bir yapı sunar. Eğer middleware'lar olmasaydı, tüm bu işlevleri her rota içinde tekrar tekrar yazmamız gerekirdi!

# Routes & Middlewares

### What? Why?

![](./middlewares1.png)

### Example:

![](./middlewares2.jpeg)
