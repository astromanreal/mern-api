const mongoose = require("mongoose");

const travelDiarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // author: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TravelDiary", travelDiarySchema);
