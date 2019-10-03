const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const dotEnv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const dburl = process.env.URL;

router.get('/',(req,res) => {

   MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {

           const hero = req.body.hero;
           const movie = req.body.movie;

           if(err){
           	console.log("Error",err);
           }else{

           	var collection = client.db('Kotlin_db').collection('Superheros');
              
            collection.insertOne({hero:hero,movie:movie}).then((response) => {

                 res.send("Data added successfully");

            }).catch((err) => {

                console.log("Error",err);
            }); 

           	client.close();
           }
   });

});

module.exports = router;