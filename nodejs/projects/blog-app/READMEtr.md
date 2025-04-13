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

# Sequelize vs. Mongoose: Temel Farklar

## 1. Veritabanı Desteği

| Özellik             | Sequelize                      | Mongoose                     |
| ------------------- | ------------------------------ | ---------------------------- |
| **Veritabanı Türü** | İlişkisel (SQL)                | NoSQL (MongoDB)              |
| **Desteklenen DB**  | MySQL, PostgreSQL, SQLite      | Sadece MongoDB               |
| **Sınıflandırma**   | ORM (Object-Relational Mapper) | ODM (Object-Document Mapper) |

## 2. Veri Modelleme

### Sequelize (SQL Modeli)

```javascript
const User = sequelize.define("User", {
  name: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
});
```

const userSchema = new mongoose.Schema({
name: String,
age: Number
});
const User = mongoose.model('User', userSchema);

```Sorgu Karşılaştırması
| İşlem         | Sequelize Sözdizimi                     | Mongoose Sözdizimi             |
|---------------|----------------------------------------|--------------------------------|
| **Kayıt Bulma** | `User.findOne({ where: { id: 1 } })`   | `User.findOne({ _id: 1 })`     |
| **İlişkiler**   | `hasMany()`, `belongsTo()`             | `populate()`                   |
| **Transaction** | Tam destek                             | Kısıtlı destek                 |
```

Avantajlar ve Dezavantajlar
Sequelize

✔ Artıları:

    Güçlü transaction desteği

    Karmaşık SQL sorguları için optimize

    Veri bütünlüğü (foreign key vs.)

✖ Eksileri:

    SQL bilgisi gerektirebilir

    MongoDB ile çalışmaz

Mongoose

✔ Artıları:

    JSON yapısıyla doğal uyum

    Hızlı prototipleme

    Esnek şema (schema-less) desteği

✖ Eksileri:

    Sadece MongoDB

    Transaction desteği kısıtlı

İlişkisel veri gerekiyorsa Sequelize, hızlı ve esnek yapı gerekiyorsa Mongoose tercih edin.

# MongoDB Update Operation Response Breakdown

This JSON output represents the result of a MongoDB update operation (e.g., `updateOne` or `updateMany`):

```json
{
  "error": false,
  "result": {
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
  }
}
```

| Alan            | Tür                | Açıklama                                                                             |
| --------------- | ------------------ | ------------------------------------------------------------------------------------ |
| `acknowledged`  | `boolean`          | İşlemin MongoDB tarafından başarıyla alınıp işlendiğini gösterir (`true` = başarılı) |
| `modifiedCount` | `number`           | Gerçekte değiştirilen doküman sayısı                                                 |
| `upsertedId`    | `ObjectId`\|`null` | Upsert ile yeni doküman oluşturulduysa onun `_id` değeri                             |
| `upsertedCount` | `number`           | Upsert ile oluşturulan doküman sayısı                                                |
| `matchedCount`  | `number`           | Filtreyle eşleşen doküman sayısı                                                     |

# 📚 MongoDB `populate()` Rehberi

## 🧩 Temel Kavram

```javascript
// Şema Tanımı:
const Post = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User' // 🔗 Referans tanımı
  }
});

🎯 Ne İşe Yarar?

    ID ↔ Doküman Dönüşümü
    ["5f8d8a7b2f3c1e2b3c4d5e6f"] → { _id: "...", name: "Ayşe", email: "ayse@example.com" }

✨ Temel Kullanım

// 1️⃣ Basit Populate
Post.find().populate('author');

// 2️⃣ Belirli Alanlarla
Post.find().populate({
  path: 'author',
  select: 'name -_id' // 📌 Sadece name, ID hariç
});

🏗️ İleri Seviye Özellikler

Order.find()
  .populate('customer') // 👨💼
  .populate('products'); // 🛍️

🪆 İç İçe Populate

Blog.find()
  .populate({
    path: 'comments',
    populate: {
      path: 'user', // 💬 Yorum sahibi
      model: 'User'
    }
  });

⚡ Performans İpuçları
Durum	Tavsiye
Büyük veri	limit() ile kısıtlama yapın
Gereksiz alanlar	select() ile sadece ihtiyacınız olanları getirin
Sık erişilen veri	🔄 Referans yerine gömülü doküman kullanmayı düşünün
```

🚨 Sık Karşılaşılan Hatalar

// ❌ Yanlış:
Post.find().populate('yazar'); // ref tanımıyla uyuşmuyor

// ✅ Doğru:
Post.find().populate('author'); // Şemada belirtilen referans adı

🌍 Gerçek Dünya Örneği

// 🏷️ Etiketleriyle birlikte ürünleri getirme
Product.find()
.populate({
path: 'tags',
match: { isActive: true } // 🏷️ Sadece aktif etiketler
});

📊 SQL vs MongoDB
Özellik SQL JOIN MongoDB populate()
Mantık Tablo birleştirme Referans çözme
Performans Büyük tablolarda yavaş İndekslerle optimize edilebilir
Esneklik Katı şema Dinamik yapı

💡 Pro Tip: populate() asenkron çalışmaz, sorgu zincirinin parçasıdır!
