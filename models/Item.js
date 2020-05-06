const mongoose = require("mongoose");

// Create Mongoose Schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Compile Schema into Model and export
module.exports = mongoose.model("Item", itemSchema);
