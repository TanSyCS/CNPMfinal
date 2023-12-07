const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authorRoute = require("./routes/authRoute");
const app = express();
dotenv.config();
const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
};
connectToMongo();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/v1", authorRoute);

app.listen(8000, (req, res) => {
  console.log("welcome");
});
