SELECT * FROM Invoice;
SELECT InvoiceId,BillingCity 
FROM Invoice;

--#DISTINCT : Tekrar eden kayıtları getirmez;

SELECT DISTINCT BillingCountry 
FROM Invoice;

--? Almanyada kesilen faturaları listeleme
--# WHERE: Koşul belirterek veri çekme işlemi
--# Operatörler: =, >, <, !=, <>, <=, >=, BETWEEN, LIKE, AND, OR, NOT, NOT IN

SELECT * FROM Invoice WHERE BillingCountry='Germany';
SELECT * FROM Invoice WHERE (total>5 AND total<8);

--SELECT * FROM Invoice WHERE InvoiceDate BETWEEN (2009.04.01 AND 2009.04.01);

--LIKE
SELECT * FROM Invoice
WHERE BillingCountry LIKE 'Germany';

--NOT Bir koşulun tersini almak için kullanılır. SELECT * FROM employees WHERE NOT department = 'Sales';

--NOT IN Belirli bir liste içinde olmayan değerleri filtreler. 
--SELECT * FROM Invoice WHERE BillingCountry NOT IN ('Norway', 'USA');department sütunu "Sales" veya "HR" olmayan çalışanlar seçilir.

SELECT *
FROM Invoice
WHERE NOT (BillingCountry = 'CANADA' AND BillingCountry = 'USA' ); 

SELECT *
FROM Invoice
WHERE Total NOT BETWEEN 5 AND 8;

--LIMIT
SELECT *
FROM Invoice
LIMIT 10; 

--ORDER BY
SELECT *
FROM Invoice
ORDER BY BillingCountry DESC, BillingCity ASC;

SELECT * FROM Track;

SELECT *
FROM Track
WHERE Composer="AC/DC" 
ORDER BY TrackId DESC
LIMIT 3

---------------- SQL 2 ----------------
-- DML (Data Manipulation Language) - CRUD işlemleri
-- DQL (Data Query Language) - Sadece okuma (SAFE)
-- BNF Form: SQL sözdiziminin kurallarını tanımlamak için kullanılır.

SELECT * 
FROM Invoice;

SELECT InvoiceId, BillingCity 
FROM Invoice;


--# DISTINCT: Tekrar eden kayitlari getirmez.
SELECT DISTINCT BillingCountry
FROM Invoice;

SELECT DISTINCT BillingCountry, BillingCity
FROM Invoice;


--# WHERE: Koşul belirterek veri çekme işlemi
--# Operatörler: =, >, <, !=, <>, <=, >=, BETWEEN, LIKE, AND, OR, NOT, NOT IN 

--? Almanyada kesilen faturalari listeleme
SELECT * 
FROM Invoice
WHERE BillingCountry = 'Germany';

--? Fatura miktari 5 ile 8 arasinda olanlari listeleme

-- >= ve <= kullanarak
SELECT *
FROM Invoice
WHERE Total >= 5 AND Total <=7.96;

-- BETWEEN
SELECT *
FROM Invoice
WHERE Total BETWEEN 5 AND 8;

--? Belli tarihler arasındaki faturaları listeleme
SELECT *
FROM Invoice
WHERE InvoiceDate BETWEEN '2009-1-1' AND '2009-3-1';

--# LIKE operatörü: Belirli bir desene uygun kayıtları getirir

--? Fatura ulkesi 'Germany' olanlari listeme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'Germany';

--? Fatura ülkesi "G" harfi ile başlayanları listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'G%';

--? Sonu "y" harfi ile biten ülkeleri listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '%y';

SELECT *
FROM Invoice
WHERE BillingCountry LIKE 'G%y';

--? İçinde "w" harfi geçen ülkeleri listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '%w%';

--? İkinci harfi "o" olan ülkeleri listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '_o%';

--? Üçüncü harfi "r" ve son harfi "y" olan ülkeleri listeleme
SELECT *
FROM Invoice
WHERE BillingCountry LIKE '__r%y';

--# NOT IN: Belirtilen verilerle eslesmeyenleri listeleme
SELECT *
FROM Invoice
WHERE BillingCountry NOT IN ('Norway', 'USA');

SELECT *
FROM Invoice
WHERE NOT BillingCountry = 'Norway';



--# LIMIT: Belirtilen sayıda kayıt getirme

--? İlk 10 faturayı listeleme
SELECT *
FROM Invoice
LIMIT 10;

--# ORDER BY: Sıralama işlemi (ASC: Artan, DESC: Azalan)

--? Ülke adına göre artan sıralama
SELECT *
FROM Invoice
ORDER BY BillingCountry; -- default ASC

--? Ülke adına göre azalan sıralama
SELECT *
FROM Invoice
ORDER BY BillingCountry DESC;

--? Ülke adına göre artan, şehir adına göre azalan sıralama
SELECT BillingCountry, BillingCity
FROM Invoice
ORDER BY BillingCountry, BillingCity DESC;

--? AC/DC grubunun ilk  parçasını listeleme
SELECT *
FROM Track
WHERE Composer = 'AC/DC'
LIMIT 1;

--? AC/DC grubunun son 3 parçasını listeleme
SELECT *
FROM Track
WHERE Composer = 'AC/DC'
ORDER BY TrackId DESC
LIMIT 3;

--# Fonksiyonlar: MIN, MAX, AVG, SUM, ROUND, LENGTH (Tek değer döndüren fonksiyonlar)(SELECT ile FROM arasina yazilir)

SELECT sum(Total) As Toplam FROM Invoice
SELECT 
	min(total) as MinFatura,
	max(Total) as maxFatura,
	round(avg(total),2) as avgFatura
FROM Invoice

SELECT length(BillingAddress) As 'Billing Address uzunluğu' FROM Invoice

SELECT * FROM Track;

SELECT * FROM Track WHERE Composer='roger glover'
ORDER BY Milliseconds ASC;

SELECT MIN(Milliseconds) AS "En kısa parca"
FROM Track
WHERE Composer = "roger glover";

SELECT * 
FROM Invoice
GROUP BY BillingCountry ;

SELECT avg( total), BillingCountryp*
FROM Invoice
GROUP BY BillingCountry ;

--SUB QUERYSUBQUERY (Alt Sorgu), 
--SQL'de bir sorgunun içinde başka bir sorgu kullanma işlemidir. 
--Alt sorgular, ana sorgunun bir parçası olarak çalışır ve genellikle SELECT, INSERT, UPDATE, DELETE veya WHERE 
--gibi ifadelerde kullanılır. Alt sorgular, tek bir değer dönebileceği gibi, bir liste veya tablo da dönebilir.

SELECT round(avg(Total)) 
FROM Invoice
GROUP By total
HAVING 
 
SELECT * 
FROM Invoice 
WHERE total>(SELECT round(avg(Total)) 
FROM Invoice);
