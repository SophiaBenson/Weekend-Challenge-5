var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/DBNAME';///- change with database name
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/DB');
var animalSchema = new mongoose.Schema({
  name: String,
  animal: String,
  age: Number,
  image: String
});
var ourModel = mongoose.model('ourModel', animalSchema);

//get basic url
app.get("/", function(req, res){
  console.log("From base url");
  res.sendFile(path.resolve('./views/index.html'));
});//end base url

app.get('/getAnimals', function (req, res) {
  ourModel.find()
  .then( function (data) {
    res.send(data);
  });

});//end get

app.post('/testPost', function (req, res) {
  console.log("req.body : " + req.body.name);
  //put into an object to be saved in database
  var animalToAdd={
    name: req.body.name,
    animal: req.body.animal,
    age: req.body.age,
    image: req.body.image
  };//end object
  var newAnimal=ourModel(animalToAdd);
  newAnimal.save();
});//end post
//static public
app.use(express.static('public'));

//spin up server
app.listen( 3000, "localhost", function(req, res){
  console.log("Server listening on 3000");
});//end app.listen
