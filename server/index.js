const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cookieParser = require("cookie-parser");
require("dotenv").config();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(cookieParser());

const URI = process.env.URI_CONNECTION_STRING;
const PORT = process.env.PORT || 5001;

mongoose
  .connect(URI)
  .then(console.log("SUCCESS DB CONNECT"))
  .then(
    app.listen(PORT, function (err) {
      if (err) console.log("Error in server setup");
      console.log("Server listening on Port", PORT);
    })
  );
