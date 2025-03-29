const express=require("express");
const app=express()
const port=8000;

app.use("/user",(req,res,next)=>{
    console.log("User middleware runnig")
    res.send("<h1>User Running</h1>");
})
app.use("/",(req,res)=>{
    console.log("Home middleware runnig")
    res.send("<h1>Home Running</h1>")
})

app.listen(port,()=>{
    console.log(`middle ware running on port: ${port}`)
})