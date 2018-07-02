var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.end("hello");
});

/*app.get("/get/:prova.json", function(req, res) {
    res.end("Requested: " + req.params.prova);
});*/

app.listen(8888);
console.log("Server's up");