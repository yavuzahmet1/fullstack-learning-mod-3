"use strict"

const express=require("express");
const app=express()

require("dotenv").config();
const PORT=process.env.PORT??8000;

//*Router is special app for URL control is Express.js

const router=express.Router();

// router.get("/", (req,res)=>res.send({method:"GET"}))

router.route("/")
.get((req,res)=>res.send({method:"GET"}))
.post((req,res)=>res.send({method:"POST"}))
.put((req,res)=>res.send({method:"PUT"}))

app.use(router);

app.listen(PORT,()=>console.log("running at:http//127.0.0.1:"+PORT))
