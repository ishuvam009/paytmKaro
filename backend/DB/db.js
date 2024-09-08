const mongoose = require("mongoose");
const { zod } = require("zod");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

  const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 2,
        maxLength: 20
    },

    password: {
        type: String,
        required: true,
        minLength: 8
    },

    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
    
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    }
  })

const User = mongoose.model('User', userSchema);

module.exports = {User};