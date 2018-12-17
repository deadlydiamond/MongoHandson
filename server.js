//dependencies 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//connect to MongoDB
mongoose.connect('mongodb://tutrack:cs151054@ds229474.mlab.com:29474/tutrack', {useNewUrlParser:true});

//express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

//start server
app.listen(1000);
console.log("Server is running on port 1000")
