require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Use environment variables
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000; //

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
