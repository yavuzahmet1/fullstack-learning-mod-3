-- Active: 1741976409637@@127.0.0.1@3306
---------------------------------- JOINS ----------------------------------

-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif Yazım: JOIN) Default JOIN yöntemi INNER JOIN'dir. (Piyasa kullanımı: INNER JOIN)

SELECT * FROM "Album";
SELECT * FROM "Artist";

SELECT * 
FROM "Artist"
JOIN "Album" ON "Artist"."ArtistId" = "Album"."ArtistId";

SELECT "Artist"."ArtistId", "Artist"."Name", "Album"."AlbumId", "Album"."Title" 
FROM "Artist"
JOIN "Album" ON "Artist"."ArtistId" = "Album"."ArtistId";

SELECT 
    a."ArtistId",
    a."Name", 
    l."AlbumId", 
    l."Title" 
FROM "Artist" AS a
JOIN "Album" l  ON a."ArtistId" = l."ArtistId";

-- * LEFT JOIN -- Üst (FROM) tablodaki BÜTÜN kayıtlar ve JOIN tablodaki KESİŞEN kayıtları getir
SELECT 
    a."ArtistId",
    a."Name", 
    l."AlbumId", 
    l."Title" 
FROM "Artist" AS a
LEFT JOIN "Album" l  ON a."ArtistId" = l."ArtistId";

-- * RIGHT JOIN -- Üst (FROM) tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.
SELECT 
    a."ArtistId",
    a."Name", 
    l."AlbumId", 
    l."Title" 
FROM "Artist" AS a
RIGHT JOIN "Album" l  ON a."ArtistId" = l."ArtistId"
ORDER BY a."ArtistId" ASC, l."AlbumId" ASC;

-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
SELECT 
    a."ArtistId",
    a."Name", 
    l."AlbumId", 
    l."Title" 
FROM "Artist" AS a
FULL OUTER JOIN "Album" l  ON a."ArtistId" = l."ArtistId";


--? Hangi sanatçı hangi albümleri çıkarmıştır. Sadece albüm sahibi olan sanatçıları göster.
SELECT t1."ArtistId", "Name", "Title", t2."AlbumId"
FROM "Artist" t1
JOIN "Album" t2 USING ("ArtistId");


--? Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1."ArtistId", t1."Name", t2."Title", t2."AlbumId"
FROM "Artist" t1
LEFT JOIN "Album" t2 USING ("ArtistId");

/* FUNCTIONS (count & IN) */

-- **Albüm tablosundaki toplam kayıt sayısını getir**
SELECT * FROM "Album";

SELECT count(*) 'total-album-number' FROM "Album";
SELECT count("AlbumId") 'total-album-number' FROM "Album";

-- **Her ülkenin toplam fatura sayısını getir**
SELECT "BillingCountry", count("InvoiceId") 'total-invoices'
FROM "Invoice"
GROUP BY "BillingCountry";

-- **Bir ülkede birden fazla müşteri olan ülkeleri getir**
SELECT Country , count("Country") 'country-count'
FROM Customer
GROUP BY "Country"
HAVING count("Country") > 1;

-- **ABD ve Kanada'daki faturaları listele**
SELECT * 
FROM "Invoice"
WHERE BillingCountry IN ('USA', 'Canada');


/* INSERT & UPDATE & DELETE */

SELECT * FROM genre;

-- **Yeni bir müzik türü (Genre) ekle**
INSERT INTO Genre (GenreId, Name) VALUES ( 27, 'Halk Muzigi');

-- **Türk Halk Müziği ve Pop Müziği türlerini ekle**
INSERT INTO Genre (GenreId, Name) 
VALUES 
    ( 28, 'Türk Halk Müziği'), 
    ( 29, 'Türk Pop Müziği'); 

-- **exp-1 olarak bir müzik türünün adını güncelle**
UPDATE "Genre"
SET NAME = 'Alman Rap'
WHERE "GenreId" = 26;

-- **Genre tablosundaki tüm verileri sil**
DELETE FROM genre;

DELETE FROM "Invoice"
WHERE "InvoiceId" = 1;

