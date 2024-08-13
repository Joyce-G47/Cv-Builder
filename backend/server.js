require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api', require('./routes/auth')); // Ensure this path is correct

// Default route
app.get('/', (req, res) => res.send('API is running'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
