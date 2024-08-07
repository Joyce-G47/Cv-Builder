require('dotenv').config();
const express = require('express');
const db = require('./config/db'); // Import the database connection
const app = express();

const port = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
