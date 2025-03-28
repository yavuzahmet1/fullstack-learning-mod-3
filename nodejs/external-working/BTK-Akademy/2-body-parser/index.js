const express=require("express");
const app=express();
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product",(req,res,next)=>{
    
    res.send(`<html>
        <head><title> Add a New Product</title></head>
        <body>
        <form action="product" method="POST">
        <input type="text" name="productName">
        <input type="submit" value="Save Product">
        </form>
        </body>
        </html>
        `);
});
app.use("/product",(req,res,next)=>{

    //save to database
    console.log(req.body);

    res.redirect("/")
});

app.use("/",(req,res,next)=>{
    
    console.log("Middleware running.");
    res.send('<h1>Hello from express js</h1>');
    
});

app.listen(3001,()=>{
    console.log("listening on port 3001")
});