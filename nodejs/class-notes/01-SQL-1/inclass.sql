-- Bu artik bir yorum satiridir. SingleLine

/* 
	MultiLine
	Comment
*/

-- SELECT 1 AS one -- Tek block islemlerde sonunda ; koymak zorunda degiliz.
-- SELECT 2 AS two; -- komuttan sonra yorum icin -- kullanabiliriz.
-- SELECT 3 AS three, /* araya yorum yazabiliriz.*/ 4 AS four;

-- * Piyasa Standatlari;
-- * * SQL Temel komutlarini BUYUK harfle yazilir. SELECT * FROM ... WHERE ...; // kucuk yazilsada calisir.
-- * * String verilerde tek veya cift tirnak kullanabiliriz. Piyasa standarti tek tirnaktir. SELECT 'string' AS one;
-- * * Her bir temel komut ayri satira yazilir
/* 
SELECT * 
FROM tableName
WHERE 1=1
ORDER BY ... 
*/

--------------------- SQL --------------------------

-- * SELECT -- Sec ve getir.
-- * FROM -- Hangi tablodan?
SELECT * FROM Album; -- * = Tum sutunlar
SELECT AlbumId, Title FROM Album; -- Istedigim sutunlari getir. Tavsiye edilen yontem tek tek yazmaktir.

-- * AS -- Tablo ve sutunlari (gecici olarak) adlandirmak icin kullanilir.
SELECT 3 AS number;
SELECT 'string' AS title;

SELECT AlbumId AS Number, Title AS 'Album Title' FROM Album; -- Sutunlari isimlendirme.
SELECT a.AlbumId AS Number, a.Title AS 'Album Title' FROM Album AS a; -- Table isimlendirme.
SELECT a.AlbumId Number, a.Title 'Album Title' FROM Album a; -- AS yazamadan (bosluk birakrak) isimlendirme sekli. Tavsiye edilen yontem.