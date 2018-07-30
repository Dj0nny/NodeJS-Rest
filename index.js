var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Person = require('./app/models/person');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var port = process.env.PORT || 7777;

mongoose.connect("mongodb://127.0.0.1:27017");


var router = express.Router();

router.get('/', function(req, res) {
    res.json({message: "Hello world"});
});

app.use('/api', router);

app.listen(port);
console.log("Server's up at " + port);

