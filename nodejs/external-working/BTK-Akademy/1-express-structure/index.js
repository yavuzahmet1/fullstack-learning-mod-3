const express=require("express");
const app=express();

//bize gelen her istek "/" ile başladığından "/product" da desek bize "Hello from express js" mesajı gelir. Ama routelere yöndlendirirsek yukarıdan aşağıya doğru gider sonunda send ile kullanıldığından aşağıdaki işlemler görmezden geliniyor

app.use("/product",(req,res,next)=>{
    console.log("Middleware running.");
    res.send('<h1>Hello product page</h1>');
});
app.use("/about",(req,res,next)=>{
    console.log("Middleware running.");
    res.send('<h1>Hello about page</h1>');
});
//"/" bu routenin sona eklenmesi daha iyi olacak çünkü diğer routesleden sonra burası açlışacak
app.use("/",(req,res,next)=>{
    console.log("Middleware running.");
    res.send('<h1>Hello from express js</h1>');
    next();
});

app.listen(3000,()=>{
    console.log("listening on port 3000")
});