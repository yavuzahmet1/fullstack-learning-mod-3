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

const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/mydatabase');

// Şema tanımı
const userSchema = new mongoose.Schema({
name: String,
age: Number,
isActive: Boolean
});

// Model oluşturma
const User = mongoose.model('User', userSchema);

// Yeni kullanıcı ekleme
const newUser = new User({ name: 'Ahmet', age: 25, isActive: true });
newUser.save()
.then(() => console.log('Kullanıcı kaydedildi!'))
.catch(err => console.error('Hata:', err));

# ORM Nedir? (Object-Relational Mapping)

**ORM**, nesne yönelimli programlama (OOP) ile ilişkisel veritabanları arasında köprü kuran bir programlama tekniğidir. Kodunuzdaki nesnelerle veritabanı tablolarını eşleştirerek, veri yönetimini kolaylaştırır.

---

## ORM Nasıl Çalışır?

- **Veritabanı tablolarını** kodunuzdaki **sınıflara** dönüştürür.
- **Tablo satırlarını** nesne örnekleri (**instance**) olarak temsil eder.
- **Sütunlar**, nesnenin **özellikleri** haline gelir.
- SQL sorgularını (örn. `SELECT`, `INSERT`) otomatik oluşturur (`.save()`, `.find()` gibi metodlarla).

### Örnek (ORM'siz vs. ORM'li)

```javascript
// ORM KULLANMADAN (Ham SQL)
db.query("SELECT * FROM users WHERE id = 1", (err, result) => {
  console.log(result.rows[0]);
});

// ORM İLE (Örn: Sequelize)
const user = await User.findOne({ where: { id: 1 } });
console.log(user);
```

JavaScript/Node.js =>Sequelize, TypeORM, Prisma
Python =>SQLAlchemy, Django ORM
Java =>Hibernate
PHP =>Eloquent (Laravel)

ORM'nin Avantajları

    Verimlilik: SQL bilmeden veritabanı işlemleri yapabilirsiniz.

    Güvenlik: SQL enjeksiyon riskini azaltır.

    Okunabilirlik: Kod daha temiz ve modüler hale gelir.

    Veritabanı Bağımsızlığı: PostgreSQL → MySQL gibi geçişler kolaylaşır.

Dezavantajlar

    Performans: Karışık sorgular ham SQL kadar hızlı olmayabilir.

    Öğrenme Eğrisi: ORM'e özel syntax öğrenmek gerekir.

ORM vs. ODM

    ORM: İlişkisel veritabanları (MySQL, PostgreSQL) için kullanılır.

    ODM: NoSQL (MongoDB gibi) için kullanılır (Örn: Mongoose).
