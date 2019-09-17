// require mongoose
var mongoose = require("mongoose");

// creates schema
var Schema = mongoose.Schema;

// creates the notes schema
var noteSchema = new Schema({
  // this is the associated article that we want to attach the note to.
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  // we set the users input as a string.
  noteText: String
});

// creates Note model
var Note = mongoose.model("Note", noteSchema);

// exports the Note model
module.exports = Note;
