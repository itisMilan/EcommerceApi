const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require('./routes/auth.js')

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://abhaymilan8gmailcom:5kr6M8UV6KX92zx@cluster0.x3aaa.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
  app.use("/api/auth",authRoute)

  app.use("/api/users",userRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server Is Running!");
});
