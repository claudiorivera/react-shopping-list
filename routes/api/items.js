const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");

// GET api/items - All items by descending date
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// POST api/items - Create an item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

// DELETE api/items/id - Delete an item
// router.delete("/:id", (req, res) => {
//   Item.deleteOne(
//     {
//       id: req.params.id,
//     },
//     () => {
//       res.json({ msg: `Item deleted with ID ${req.params.id}` });
//     }
//   ).catch((err) => console.log(err));
// });

module.exports = router;
