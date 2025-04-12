"use strict"

module.exports = (err, req, res) => {
    console.log("Errorhandler Worked");
    const customErrorCode = res?.customErrorCode || 500;
    res.status(customErrorCode).send({
        error: true,
        message: err.message,
    });
};

//! Error handler middleware'i her zaman en sona eklenmeli
//* Başka middleware'lerde res.customErrorCode = 404 şeklinde özelleştirilebilir. 500: Sunucu hatası,400: Client hatası ve 404: Bulunamadı

// ! stack trace pek önerilmiyor 
// ! Error: Database connection failed
// !    at connectToDB (/app/services/db.js:25:15)
// !    at getUser (/app/controllers/user.js:10:5)
// !    at /app/routes/user.js:15:20
// ! nedeni: güvenik riski sistem dosyalarını açık eder

// ?🔒 Gold Rule: Kullanıcıya asla sistem detayı göstermeyin. Stack trace'ler sadece log dosyalarında ve development ortamında olmalıdır.