# Mongoose Nedir?

**Mongoose**, Node.js ortamında **MongoDB** veritabanı ile etkileşim kurmayı kolaylaştıran bir **ODM (Object Data Modeling)** kütüphanesidir. MongoDB'nin esnek ve şemasız yapısını daha düzenli hale getirerek, verileri şemalar (modeller) aracılığıyla yönetmeyi sağlar.

## Temel Özellikleri

- **Şema (Schema) Tabanlı**: MongoDB'nin şemasız yapısına rağmen, Mongoose şema tanımlayarak veri yapısını standartlaştırır.
- **Model Oluşturma**: Şemalardan modeller türeterek veritabanı işlemlerini kolaylaştırır.
- **Middleware (Ara Yazılım)**: `pre` ve `post` fonksiyonlarıyla veri kaydetme/silme gibi işlemlerde aksiyon almayı sağlar.
- **Validation (Doğrulama)**: Veri eklerken veya güncellerken otomatik doğrulama yapar.
- **Query (Sorgu) Kolaylığı**: Zincirleme sorgular yazmayı destekler (ör: `find()`, `where()`, `limit()`).

## Kurulum

```bash
pnpm add mongoose
```
