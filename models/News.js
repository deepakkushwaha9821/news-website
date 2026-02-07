const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: ["Technology", "Sports", "Business"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
