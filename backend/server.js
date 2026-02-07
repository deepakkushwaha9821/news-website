const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const newsRoutes = require("./routes/newsRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB connection (Atlas) */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

/* Routes */
app.use("/api/news", newsRoutes);

/* Health check */
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

/* Port (Render-safe) */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
