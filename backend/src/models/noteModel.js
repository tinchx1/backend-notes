const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  archived: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  color: {
    type: String,
    required: true
  },
  categories: [{
    type: String
  }]
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
