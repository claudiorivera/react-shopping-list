require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Environmental values
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

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
  .connect(MONGO_URI)
  .then(() => console.log("DB connected..."))
  .catch((error) => console.log(error));

// Routes
app.use("/api/items", require("./routes/api/items"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
