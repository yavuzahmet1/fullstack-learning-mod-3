"use strict"

const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send({method:'GET'})
});
router.post("/",(req,res)=>{
    res.send({method:'POST'})
});

router.delete("/",(req,res)=>{
    res.send({method:'DELETE'})
});

module.exports=router;