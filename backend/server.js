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
app.get('/', (req, res) => 
  res.send('Server is running'));


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST; // Bind the server to this IP address

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
