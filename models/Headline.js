// here we require the mongoose node package
var mongoose = require("mongoose");

// creates a schema class using mongoose's method
var Schema = mongoose.Schema;

// creates the headlineSchema
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// creates Headline model
var Headline = mongoose.model("Headline", headlineSchema);

// Headline model
module.exports = Headline;
