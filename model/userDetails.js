var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetailsSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String
})

module.exports = mongoose.model('UserDetails', userDetailsSchema)
