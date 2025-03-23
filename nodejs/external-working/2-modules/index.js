//! MODULES
// 1. Kodun Modüler Hale Getirilmesi

//     Parçalara Ayırma: Büyük bir uygulamayı küçük, bağımsız modüllere bölmek, kodun daha anlaşılır ve yönetilebilir olmasını sağlar.

//     Yeniden Kullanılabilirlik: Modüller, farklı projelerde veya aynı projenin farklı bölümlerinde yeniden kullanılabilir. Örneğin, bir veritabanı bağlantı modülü, birden fazla projede kullanılabilir.

// 2. Kapsülleme (Encapsulation)

//     Gizlilik: Modüller, içlerindeki değişken ve fonksiyonları dış dünyadan gizleyebilir. Sadece module.exports veya export ile dışarıya açılan kısımlar erişilebilir olur.

//     Çakışmaları Önleme: Modüller, değişken ve fonksiyon isimlerinin global alanda çakışmasını önler.
// 3. Bakım Kolaylığı
// 4. Bağımlılık Yönetimi
// 5. Performans Optimizasyonu
// 6. Topluluk ve Ekosistem Desteği
// 8. Örnek Senaryo: Modüllerin Faydaları

// Bir e-ticaret uygulaması geliştirdiğinizi düşünün. Modüller kullanarak şunları yapabilirsiniz:

//     Veritabanı Bağlantısı: db.js modülü ile veritabanı bağlantısını yönetirsiniz.

//     Kimlik Doğrulama: auth.js modülü ile kullanıcı girişi ve kaydı işlemlerini yönetirsiniz.

//     Ürün Yönetimi: products.js modülü ile ürün ekleme, silme ve güncelleme işlemlerini yönetirsiniz.

//     Sepet İşlemleri: cart.js modülü ile sepet işlemlerini yönetirsiniz.

// Her modül, kendi sorumluluğunu taşır ve diğer modüllerden bağımsız çalışır. Bu, uygulamanın genişletilebilir ve bakımı kolay olmasını sağlar.

// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5