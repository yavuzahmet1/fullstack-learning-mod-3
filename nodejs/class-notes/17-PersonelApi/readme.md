# BLOG Project with Mongoose

## MONGOOSE

https://mongoosejs.com/

### What? Why?

![](./mongoose.png)

## BLOG API

### ERD:

![ERD](./erdBlogAPI.png)

##TOKEN
Token, dijital sistemlerde güvenli kimlik doğrulama ve yetkilendirme için kullanılan şifrelenmiş bir veri parçasıdır. Kullanıcı bilgilerini güvenli şekilde taşıyarak geleneksel şifre ve oturum yönetimine modern bir alternatif sunar.

Temel Özellikler

    Durumsuz (Stateless): Sunucu tarafında oturum bilgisi tutmaz

    Kendi Kendine Yeten: Tüm gerekli bilgileri içinde barındırır

    Şifrelenmiş: Kriptografik imzalarla korunur

    Zaman Sınırlı: Belirli bir süre sonra geçersiz hale gelir

Yaygın Token Türleri

    JWT (JSON Web Token): API kimlik doğrulama için

    OAuth Token: Üçüncü parti servis erişimleri için

    CSRF Token: Form güvenliği için

    Refresh Token: Uzun süreli erişim için

Çalışma Prensibi

    Kullanıcı giriş yaptığında sunucu token oluşturur

    Token istemci tarafında saklanır

    Her istekte sunucuya gönderilir

    Sunucu tokenı doğrular ve işleme alır

Token Avantajları

    Sunucu kaynak kullanımını azaltır

    Mikroservis mimarilerine uygundur

    Mobil uygulamalarda kullanımı kolaydır

    Çapraz platform çalışabilir

Güvenlik Önlemleri

    Mutlaka HTTPS üzerinden kullanılmalı

    Kısa ömürlü access tokenlar kullanılmalı

    Sensitif bilgiler token içinde saklanmamalı

    Tokenlar güvenli şekilde depolanmalı

Saklama Yöntemleri

    HttpOnly Cookie (en güvenli)

    Secure LocalStorage

    SessionStorage (daha kısa ömürlü)

Ne Zaman Kullanılır?

    API tabanlı sistemlerde

    Mobil uygulamalarda

    Tek sayfa uygulamalarında (SPA)

    Mikroservis mimarilerinde
