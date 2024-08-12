require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../backend/models/User'); // Adjust the path to your User model

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createSampleUser = async () => {
  try {
    // Check if user already exists
    let user = await User.findOne({ email: 'john.doe@example.com' });
    if (user) {
      console.log('User already exists');
      return;
    }

    // Create a new user
    user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: await bcrypt.hash('password123', 10), // Hash the password
    });

    await user.save();
    console.log('Sample user created successfully');
  } catch (err) {
    console.error('Error creating sample user:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

createSampleUser();
