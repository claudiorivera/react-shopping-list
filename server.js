require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// JSON middleware parser
app.use(express.json());

// DB config
const db = process.env.MONGO_URI;

console.log(db);
