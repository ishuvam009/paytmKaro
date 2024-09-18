const mongoose = require("mongoose");
const { zod } = require("zod");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 2,
    maxLength: 20,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
  },

  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
  },
});

const bankSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  balance: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
    },
  }
});

const transactionSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  amount:{
    type: Number,
    required: true,
    min: 0.01
  },

  transactionDate: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", bankSchema);
const Transaction = mongoose.model("Transaction",transactionSchema)

module.exports = { User, Account, Transaction };
