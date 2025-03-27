const function1=()=>{
    console.log("function 1 completed");
    function3()
}

const function2=()=>{
    console.log("function 2 completed");
}

const function3=()=>{
    console.log("function 3 completed");
    function2()
}
function1()


//javascript single thread'dir yani aynı anda tek bir işlem yapabilir ve her zaman senkron calışır.

//işte biz bunları manuple ederek async hale getirebiliriz buna da callback functionlar ile yapabiliriz.

//! bir fonkisyonun başka bir fonksiyonu argüman olarak aldığı için higher order function -yüksek seviyeli fonksiyon- olarak isimlendirilir.

let x=5;
console.log(x)

setTimeout(()=>{
    x=x+5;
    console.log(x)
},1000)

x=x+10;
console.log(x)
console.clear()
const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
  ];
const listBooks=()=>{
    books.map(book=>{
        console.log(book.name)
    })
}

listBooks();

// const addBook=(newBook)=>{
//     books.push(newBook)
// }

// addBook({name:"kitap 4",author:"Yazar 4"})
console.log("---------")
listBooks()
console.log("---------")
console.log("Şimdi bir kitap eklendiğinde aynı anda başka bir işlem de yapılmasını istiyorsak bu callbackdir!!!")

const addBook=(newBook,callback)=>{
    books.push(newBook);
    callback()
}

// görüldüğü gibi ek kitap ve yazar bilgisi ekleniyor ve sonrasında eklenen bilgiler callback fonsiynu ile tekrar listeleniyor
addBook({name:"kitap 4",author:"Yazar 4"},listBooks);

//LIBUV =>asynchrous L/O olarak çalışmasını sağlayan bölümdür.
// Libuv, Node.js'in asenkron I/O (Input/Output) işlemlerini yönetmek için kullandığı temel kütüphanedir. Node.js'in performansını ve olay tabanlı mimarisini güçlendiren kritik bir bileşendir.
//! 1. Libuv Nedir?
//     Platform bağımsız bir asenkron I/O kütüphanesidir (Windows, Linux, macOS destekler).
//     Event Loop mekanizmasını yönetir.
//     Dosya sistemi işlemleri (FS), ağ (TCP/UDP), zamanlayıcılar (timers), child process gibi işlemleri non-blocking şekilde çalıştırır.
//     C diliyle yazılmıştır, performans odaklıdır.

// 2. Libuv ve Node.js Nasıl Çalışır?
// Node.js, V8 JavaScript motoru + Libuv kombinasyonuyla çalışır:
//     JavaScript kodu V8 tarafından çalıştırılır.
//     Asenkron işlemler (dosya okuma, HTTP isteği, timer) Libuv'e devredilir.
//     Libuv, bu işlemleri arka planda çalıştırır ve sonucu Event Loop üzerinden Node.js'e geri bildirir.
// !
// const fs = require('fs');
// fs.readFile('dosya.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data); // Libuv sayesinde non-blocking çalışır
// });

// Bu işlemde:
//     fs.readFile() Libuv tarafından yönetilir.
//     Event Loop, dosya okuma tamamlanınca callback'i çağırır.

// ! 3. Libuv'in Temel Bileşenleri
// Bileşen	Açıklama
// Event Loop	Asenkron işlemleri döngüsel olarak yönetir.
// Thread Pool	CPU yoğun işlemler için 4 varsayılan thread kullanır (dosya işlemleri gibi).
// Async I/O	OS seviyesinde non-blocking işlemleri yönetir (soketler, timerlar).
// Handles & Requests	Libuv işlemlerini temsil eder (örneğin setTimeout bir request'tir).

//! 4. Event Loop'un Çalışma Mantığı
// Libuv'in Event Loop'u 6 fazdan oluşur:
//     Timers → setTimeout, setInterval callback'leri çalıştırılır.
//     Pending Callbacks → Sistem işlemleri (TCP hataları gibi) işlenir.
//     Idle/Prepare → Dahili kullanım için.
//     Poll → I/O callback'leri beklenir (örneğin fs.readFile).
//     Check → setImmediate callback'leri çalışır.
//     Close Callbacks → socket.on('close') gibi işlemler.

setTimeout(() => console.log('Timer'), 0);
setImmediate(() => console.log('Immediate'));
fs.readFile('file.txt', () => {
  console.log('File read');
  setTimeout(() => console.log('Timer in Poll'), 0);
  setImmediate(() => console.log('Immediate in Poll'));
});

// 7. Libuv'i Geliştiriciler Neden Önemser?

// ✔️ Node.js'in performansını artırır.
// ✔️ Asenkron I/O işlemlerini basitleştirir.
// ✔️ Windows ve Unix sistemlerinde tutarlı davranış sağlar.