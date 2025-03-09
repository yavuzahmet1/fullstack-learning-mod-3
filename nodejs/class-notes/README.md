# Nodejs Session Class-notes

# Mongoose

**index:true**
index: true kullanımı, MongoDB'nin ilgili alan için bir B-tree indeks oluşturmasını sağlar.
İndeksli bir alan üzerinde yapılan sorgular, indekssiz sorgulara göre çok daha hızlı çalışır çünkü MongoDB tüm belgeleri taramak yerine indeksi kullanır.

**Avantajları**
Hızlı Sorgu: find, findOne gibi işlemler indeksli alanlarda daha hızlı çalışır.
Verimlilik: Büyük koleksiyonlarda performansı artırır.
Sıralama (Sorting): Sorgular sırasında sıralama işlemleri daha hızlı yapılır

**unique ile index farkı**
index: true yalnızca bir indeks oluşturur, benzersizlik sağlamaz.
unique: true, hem indeks oluşturur hem de değerlerin benzersiz olmasını zorunlu kılar.

**Manuel İndeksleme**
Eğer şemada index: true kullanmadan manuel bir indeks oluşturmak isterseniz, şu şekilde yapabilirsiniz:

userSchema.index({ username: 1 }); // 1: Artan sırada indeks
userSchema.index({ email: 1 }, { unique: true }); // Benzersiz bir indeks

**Validate-1**
validate: {
validator: function (value) {
return value >= 18; // Yaş 18 veya daha büyük olmalı
},
message: (props) => `${props.value} geçerli bir yaş değil! En az 18 yaşında olmalısınız.`
}
**Validate-2**

validate: {
validator: function (value) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // E-posta regex kontrolü
      },
      message: (props) => `${props.value} geçerli bir e-posta adresi değil!`,
},
**Validate-2**
    validate: {
      validator: async function (value) {
        // Kullanıcı adının benzersiz olup olmadığını kontrol et
        const existingUser = await mongoose.models.User.findOne({ username: value });
        return !existingUser; // Kullanıcı adı mevcut değilse true döner
      },
      message: (props) => `${props.value} zaten kullanılıyor!`,
},

### Başka bir alana göre şartlı required

eggs: {
type: Number,
min: [6, 'Too few eggs'],
max: 12
},
bacon: {
type: Number,
required: [true, 'Why no bacon?']
},
drink: {
type: String,
enum: ['Coffee', 'Tea'],
required: function() {
return this.bacon > 3;
}
}
