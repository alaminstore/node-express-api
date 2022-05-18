const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// Middleware
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

//ROutes
app.get("/", (req, res) => {
  res.send("hello node");
});

// Connect DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

//Listener
app.listen(3000);
