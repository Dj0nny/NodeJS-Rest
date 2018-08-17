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

router.use(function(req, res, next) {
    console.log("Request recived");
    next(); 
});

router.get('/', function(req, res) {
    res.json({message: "Hello World"});
});


router.route('/person')
    .post(function(req, res) {
        var person = new Person();
        person.name = req.body.name;

        person.save(function(err) {
            if(err)
                res.send(err);
            
            res.json({message : "Person Created"});
        });
    
    })

    .get(function(req, res) {
        Person.find(function(err, person) {
            if(err)
                res.send(err);
            
            res.json(person);
        });
    });



app.use('/api', router);

app.listen(port);
console.log("Server's up at " + port);