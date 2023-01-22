const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");

const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const stripeRoute = require("./routes/stripe")
const cors = require("cors")



const { verifyToken } = require("./routes/verifyToken");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://abhaymilan8gmailcom:5kr6M8UV6KX92zx@cluster0.x3aaa.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  app.use(cors( ))
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products",productRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",stripeRoute
)




app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server Is Running!");
});
