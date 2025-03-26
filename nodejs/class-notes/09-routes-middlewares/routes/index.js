"use strict"

//!ROUTES

const express=require("express");
const router=express.Router()
router.route("/")
.get((req,res)=>res.send({method:"GET"}))
.post((req,res)=>res.send({method:"POST"}))
.put((req,res)=>res.send({method:"PUT"}))

module.exports