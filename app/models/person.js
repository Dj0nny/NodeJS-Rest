var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    address: String,
    married: Boolean
});

module.exports = mongoose.model('Person', personSchema);