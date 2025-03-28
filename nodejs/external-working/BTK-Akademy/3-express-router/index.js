const express=require("express")
const router=express.Router();


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

module.exports=router;