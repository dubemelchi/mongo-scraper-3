// require mongoose
var mongoose = require("mongoose");

// creates schema
var Schema = mongoose.Schema;

// creats the notes schema
var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

// creates Note model
var Note = mongoose.model("Note", noteSchema);

// exports the Note model
module.exports = Note;
