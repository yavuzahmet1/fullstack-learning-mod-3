//! Async Await Yapısı
// Async - Await yapısı ES8 ile birlikte gelmiştir ve Promise yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır. Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.

//? Promise ve Async/Await Temel Farkı

// Promise =>.then() ve .catch() zinciri (karmaşık okunabilir) ve hatayı .catch() ile hata yakalama
// Async/Await=>async fonksiyon + await (Daha temiz ve senkron görünümlü) ve hatayı try/catch blokları ile yakalar

// Promise ile
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Async/Await ile
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

//* Promise, basit tek seferlik işlemler için uygundur.

//* Async/Await, uzun ve karmaşık asenkron akışlarda okunabilirliği artırır.

// *Async/Await, Promise'lerin üzerine inşa edilmiş bir sentaktik şekerdir (syntactic sugar).