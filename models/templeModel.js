const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
    },
    place: {
      type: String,
    },
    god: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    height: {
      type: String,
    },
    visitor: {
      type: Number,
    },
    introduction: {
      type: String,
    },
    architecture: {
      type: String,
    },
    location: {
      type: String,
    },
    createdDate: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Temple", templeSchema);
