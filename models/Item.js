const mongoose = require("mongoose");

// Create model
const Item = mongoose.model("Item", {
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item;
