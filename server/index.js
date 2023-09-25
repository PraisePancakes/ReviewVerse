const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");
app.use(express.json());

const authRoutes = require("./Routes/Auth/AuthRoutes");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
};

app.use(cors(corsOptions));
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

app.use("/auth", authRoutes);
