"use stict"

const express=require("express");
const app=express();
require('dotenv').config();
const PORT=process.env.PORT??8000
// const router=express.Router()
const router=require("./routes/index")

app.use(router)

// router.get("/",(req,res)=>{
//     res.send({method:'GET'})
// });
// router.post("/",(req,res)=>{
//     res.send({method:'POST'})
// });

// router.delete("/",(req,res)=>{
//     res.send({method:'DELETE'})
// });

// app.use(router)

app.listen(PORT,()=>{
    console.log(`Running at:http://127.0.0.1:`+PORT)
})