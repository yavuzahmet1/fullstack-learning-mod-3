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


--? Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.

SELECT t1."ArtistId" "Name", "Title", t2."AlbumId"
FROM "Artist" t1
JOIN "Album" t2 USING ("ArtistId")
WHERE "Name" IS NOT NULL ;

--**Album tablosundaki toplam kayıt sayısını getir.
Select count("AlbumId") "total album number" FROM "Album"

--**Her ülkenin toplam fatura sayısını getir**

--**INSERT AND UPDATE***
SELECT * FROM "Genre";
