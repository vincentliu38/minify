// REQUIREMENTS
var mongoose = require('mongoose');

// SCHEMA
var brandSchema = mongoose.Schema({
  shirt: String,
  pants: String,
  shoes: String,
  outerwear: String,
  accessories: String,
});

// EXPORT
module.exports = mongoose.model('Brand', brandSchema);