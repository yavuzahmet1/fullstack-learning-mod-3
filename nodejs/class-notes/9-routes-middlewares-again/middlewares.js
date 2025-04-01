"use strict"
const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT??8000;

app.get("/",(req,res,next)=>{
    console.log("middleware working")
    // res.send({
    //     message:"this is next route or missleware"
    // });
    next();
})
app.get("/",(req,res,next)=>{
  
    req.message1="middleware 1";
    
    next()
})
app.get("/",(req,res,next)=>{
    req.message2="middleware 2";
   
    next()
})
app.get("/",(req,res,next)=>{
    req.message3="middleware 3";
   
    next()
})
app.get("/",(req,res,next)=>{
    req.message4="middleware 4";
   
    next()
})
app.get("/",(req,res)=>{
    console.log("main route")

    const obj={
        name:"Ahmet"
    }
    obj.surname="yavuz"

    console.log(obj)

    res.send({
        message1:req.message1,
        message2:req.message2,
        message3:req.message3,
        message4:req.message4
    })
})

const middleware1=(req,res,next)=>{

    req.message1="middlewareFn-1 runs"

    next();
}

const middleware2=(req,res,next)=>{

    req.message2="middlewareFn-2 runscccccc"

    next();
}

app.use(middleware1,middleware2)
// app.use(middleware2)
app.get("/api",(req,res)=>{
    console.log("function middleware")


    res.send({
        message1:req.message1,
        message2:req.message2,
        message:"the add"
      
    })
})

// app.get("/",(req,res)=>{
//     console.log("main route")

//     res.send({
//         message:"Welcome"
//     })
// })

app.listen(PORT,()=>{
    console.log("Running at: http://127.0.0.1:"+PORT)
})