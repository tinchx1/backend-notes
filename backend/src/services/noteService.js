// src/services/noteService.js
const Note = require('../models/noteModel');

const createNote = async (data) => {
  try {
    const note = new Note(data);
    return await note.save();
  }
  catch (error) {
    throw new Error(error.message);
  }
};

const getAllNotes = async () => {
  return await Note.find({});
};


const updateNote = async (id, data) => {
  return await Note.findByIdAndUpdate(id, data, { new: true });
};

const deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};

const archiveNote = async (id) => {
  return await Note.findByIdAndUpdate(id, { archived: true }, { new: true });
};
const unarchiveNote = async (id) => {
  return await Note.findByIdAndUpdate(id, { archived: false }, { new: true });
};



module.exports = {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote
};
