var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetailsSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }
})

module.exports = mongoose.model('UserDetails', userDetailsSchema)
