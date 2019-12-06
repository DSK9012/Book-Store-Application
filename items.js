const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");

const Item=require("../models/itemModel");

router.get('/',(req, res)=>{
    Item.find({itemname:"idli"})
    .then(items=>{
        console.log("got items");
        res.status(200).json(items);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
    })


    module.exports=router;