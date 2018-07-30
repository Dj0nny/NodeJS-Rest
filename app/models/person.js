var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: string,
    surname: string,
    age: integer,
    address: string,
    married: boolean
});

module.exports = mongoose.model('Person', personSchema);