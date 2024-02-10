const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const errorHandler = require("./controllers/error");

const app = express();

// environment variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// middlewares
app.use(express.json());
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use(errorHandler.serverError);

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected");
    app.listen(PORT, () => console.log(`Server started`));
  } catch (err) {
    console.log(err, "some error occured");
  }
};

connect();
