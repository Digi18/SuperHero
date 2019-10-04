const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const dotEnv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const dburl = process.env.URL;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/createHero',(req,res) => {


           const movie = req.body.movie;
         //  const superhero = req.body.hero;
           


   MongoClient.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {

          
           if(err){
           	console.log("Error",err);
           }else{

           	var collection = client.db('Kotlin_db').collection('Superheros');
              
            collection.insertOne({movie:movie}).then((response) => {

                 res.send("Data added successfully");

            }).catch((err) => {

                console.log("Error",err);
            }); 

           	client.close();
           }
   });

});

module.exports = router;