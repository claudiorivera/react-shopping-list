const express = require("express");
const mongoose = require("mongoose");

const app = express();

// JSON middleware parser
app.use(express.json());
