const noteService = require('../services/noteService');

const createNote = async (req, res) => {
  const { title, note, color } = req.body;
  try {
    const newNote = await noteService.createNote({ title, content: note, color });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateNote = async (req, res) => {
  try {
    const note = await noteService.updateNote(req.params.id, req.body);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await noteService.deleteNote(req.params.id);
    if (note) {
      res.status(200).json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const archiveNote = async (req, res) => {
  try {
    const note = await noteService.archiveNote(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const unarchiveNote = async (req, res) => {
  try {
    const note = await noteService.unarchiveNote(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote
};
