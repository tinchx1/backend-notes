const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getAllNotes);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);
router.patch('/notes/:id/archive', noteController.archiveNote);
router.patch('/notes/:id/unarchive', noteController.unarchiveNote);

const setNoteRoutes = (app) => {
  app.use('/api', router);
};

module.exports = { setNoteRoutes };
