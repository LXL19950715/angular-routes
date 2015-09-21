var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static("./static"));

app.use(bodyParser.json());

app.get('/', function(req, res){
	response.render('index')
})

require('./server/config/mongoose.js');

app.listen(8000, function(){
	console.log("--------LISTENING--------")
	console.log("--------PORT 8000--------")
})