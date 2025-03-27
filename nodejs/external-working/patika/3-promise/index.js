//! 1. Promise Nedir?
// Promise (Söz), JavaScript'te asenkron işlemleri yönetmek için kullanılan bir nesnedir. Bir işlemin başarılı (resolve) veya başarısız (reject) olma durumunu temsil eder.

//! 2. Promise'in 3 Durumu (State)
//     Pending (Beklemede): Henüz resolve veya reject çağrılmadı.
//     Fulfilled (Yerine Getirildi): resolve() çağrıldı.
//     Rejected (Reddedildi): reject() çağrıldı.

const promise1=new Promise((resolve,reject)=>{
    resolve("data is recived")// İşlem başarılı olduğunda çağrılır.
    reject("connection error!!!") //İşlem başarısız olduğunda çağrılır.
});

// console.log(promise1)

// bu hatayı adığımıza hatayı yakalamamız lazım
//hatayı almadığımızda

//promise1.then(value=>console.log(value)) //then ile yakaldık

//promise1.catch(error=>console.log(error))//hatayı catch ile yakaladık, unhalled hatası almadık çünkü hatayı yakaladık

promise1.then(value=>console.log(value)).catch(error=>console.log(error)) //bu şekilde yaparsak resolve ve catch işlemlerini fonksiyonel kullanabiliriz yani hata almazsak thende çalıştırırız, eğer hata alırsak da catch de çalıştırırız

//*Basit Bir Promise

const promise2 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("İşlem başarılı!"); // Promise fulfilled
    } else {
      reject("Hata oluştu!"); // Promise rejected
    }
  });
  
  promise2
    .then((result) => console.log(result)) // "İşlem başarılı!"
    .catch((error) => console.error(error)); // Hata durumunda

    //*setTimeout ile Asenkron İşlem
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(2000)
  .then(() => console.log("2 saniye sonra çalıştı!"))
  .catch((err) => console.error(err));

  //*API İsteği Gibi Bir Senaryo
  const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Ahmet" };
      const isSuccess = Math.random() > 0.5; // Rastgele başarı/başarısızlık
      isSuccess ? resolve(data) : reject("Veri alınamadı!");
    }, 1000);
  });
  
  fetchData()
    .then((data) => console.log("Gelen veri:", data))
    .catch((err) => console.error("Hata:", err));

//! 6. Promise'lerin Avantajları
// ✔️ Callback hell'den kurtarır.
// ✔️ then() ve catch() ile daha okunabilir kod yazmayı sağlar.
// ✔️ async/await ile daha da basitleştirilebilir.

//! Sık Yapılan Hatalar
//? resolve veya reject çağırmayı unutmak:
const notCalledExample = new Promise((resolve, reject) => {
    console.log("Merhaba"); // resolve veya reject çağrılmadı → Sonsuz pending
  });
//? Hataları yakalamamak:
  notCalledExample.then((res) => console.log(res)); // catch eklenmezse hatalar yakalanmaz

// ?  Promise, JavaScript'te asenkron işlemleri yönetmenin modern bir yoludur.
// ?  resolve() ve reject() ile sonuçlanmalıdır.
// ?  then() ve catch() ile kontrol edilir.