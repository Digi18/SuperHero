const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const dburl = process.env.URL;

router.get('/getHero',(req,res) => {


      MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {

               if(err){
               	console.log("Error",err);
               }else{
               	
               	  const collection = client.db('Kotlin_db').collection('Superheros');

               	  collection.find({}).toArray((err,result) => {
                             
                             if(err){
                             	console.log("Error",err);
                             }else{

                             	const output = result.map(r => ({name:r.name,movie:r.movie}));

                             	res.send(output);

                             	client.close();
                             }

               	  }); 
               
               }

    });  


});

module.exports = router;