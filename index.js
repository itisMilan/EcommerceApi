const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://abhaymilan8gmailcom:5kr6M8UV6KX92zx@cluster0.x3aaa.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection Successfull!")).catch((err) => {
      console.log(err);
    });


app.listen(5000, () => {
  console.log("Backend Server Is Running!");
});
