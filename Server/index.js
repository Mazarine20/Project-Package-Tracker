const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const Package = require("./models/packageModel");
const Delivery = require("./models/deliveryModel");

const app = express();
app.use(express.json());

var packageRouter = require("./routes/package");
var deliveryRouter = require("./routes/delivery");

app.use(cors());
app.use("/api/package", packageRouter);
app.use("/api/delivery", deliveryRouter);

mongoose
  .connect("mongodb+srv://mazarinesanvi:hWklhH0qOhzma3Xy@cluster0.9lhiyok.mongodb.net/package_tracker?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5000, () => {
      console.log("Server is running on port 5000...");
    });
  })
  .catch((error) => {
    console.log("Error :", error);
  });