"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 * npm i express-async-errors
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//TRY-CATCH

app.get("/user/:id",(req,res)=>{
try {
    if(isNaN(req.params.id)){
        // res.send("ID must be a number formatter") 
        throw new Error("ID number must be formatte")
            }else{
        res.send("ID correct formatt")
            }
} catch (e) {
    // res.send("Errorr")
    res.status(500).send({message:"Hata oluştu"})
    // res.sendStatus(5000)
}
//ERROR HANDLER:
//errror handler 4 parametre alır hata yakalayan 1. parametredir.
//error hanler en sona yazılır

app.get("/",(req,res)=>{
    throw new Error("hata vardi","cause çalıştı")
})
const errorHandler=(err,req,res,next)=>{
console.log("ErrorHanler worked")
res.send({
    error:true,
    message:err.message,
    cause:err.cause,
    stack:err.stack
})
}
//*errorHanler aynı zamanda middlewaredir 
//* ErrrorHanler en son çağırılır
app.use(errorHandler)


})



/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));