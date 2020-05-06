const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Get all items
router.get("/", (req, res) => {
  Item.find({}, (error, items) => {
    res.json(items);
  });
});

// Post a new item
router.post("/", (req, res) => {
  const newItem = Item({
    name: req.body.name,
  });
  newItem.save((error, item) => {
    res.json({ message: `Created item ${item.name}` });
  });
});

// Delete an item
router.delete("/:id", (req, res) => {
  Item.deleteOne({ _id: req.params.id }, (error, response) => {
    res.json({ message: `Deleted item with ID ${req.params.id}` });
  });
});

module.exports = router;
