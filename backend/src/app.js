// File: backend/backend/src/app.js

const express = require('express');
const mongoose = require('mongoose');
const { setNoteRoutes } = require('./routes/noteRoutes');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
// Create Express app
const app = express();
app.use(express.json());  
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });

// Set up routes
setNoteRoutes(app);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;