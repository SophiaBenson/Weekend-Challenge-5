var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/DBNAME';///- change with database name




//get basic url
app.get("/", function(req, res){
  console.log("From base url");
  res.sendFile(path.resolve('./views/index.html'));
});//end base url

//static public
app.use(express.static('public'));

//spin up server
app.listen( 3000, "localhost", function(req, res){
  console.log("Server listening on 3000");
});//end app.listen
