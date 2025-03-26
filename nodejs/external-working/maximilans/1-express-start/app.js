const http=require("http"); // Node.js'in http modülünü içe aktarır

const express=require("express")

const app=express()

const server=http.createServer();// Sunucu örneği oluşturur

server.listen(3000);// 3000 portunda dinlemeye başlar ve sunucuyu 3000 portunda başlatır.