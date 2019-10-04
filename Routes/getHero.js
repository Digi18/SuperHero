const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const dburl = process.env.URL;

router.get('/getHero',(req,res) => {


       res.send("Hello there");
  /* MongoClient.connect(dburl,{useNewUrlPrser:true,useUnifiedTopology:true},(err,client) => {

               if(err){
               	console.log("Error",err);
               }else{
               	
               }

    });  */


});

module.exports = router;