require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Environmental values
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// Instantiate Express
const app = express();

// JSON middleware parser
app.use(express.json());

// DB config - per https://mongoosejs.com/docs/deprecations.html
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// DB connect
mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// Get default connection and bind to error event
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// Use express router
const items = require("./routes/items");
app.use("/items", items);

// Serve client/build folder in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path(__dirname, "client", "build")));
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
