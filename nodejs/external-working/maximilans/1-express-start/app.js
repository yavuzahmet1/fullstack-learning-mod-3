const http=require("http"); // Node.js'in http modülünü içe aktarır

const express=require("express")

const app=express()

app.use((req,res,next)=>{
    console.log("In the middleware!");
    next()// çağırarak bir sonraki middleware'e geçmesi ya da bir yanıt göndermesi gerekir.
})

app.use((req,res,next)=>{
    console.log("another  middleware!");
})

const server=http.createServer(app);// Sunucu örneği oluşturur

server.listen(3000);// 3000 portunda dinlemeye başlar ve sunucuyu 3000 portunda başlatır.