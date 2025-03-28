const express=require("express");
const app=express();

app.use((req,res,next)=>{
    console.log("Middleware running.");
    res.send('<h1>Hello from express js');
});

app.listen(3000,()=>{
    console.log("listening on port 3000")
})