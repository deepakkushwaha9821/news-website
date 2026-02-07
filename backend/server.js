const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const newsRoutes = require("./routes/newsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/newsdb")
  .then(() => console.log("MongoDB connected"));

app.use("/api/news", newsRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});