const mongoose = require("mongoose");

const tirthankarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    lifespan: {
      type: String,
    },
    nirvana: {
      type: String,
      required: true,
    },
    qualities: {
      type: String,
    },
    teachings: {
      type: String,
    },
    symbol: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    tree: {
      type: String,
    },
    festivels: {
      type: String,
    },
    nickname: {
      type: String,
    },
    birth: {
      type: String,
      required: true,
    },
    ranks: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tirthankar", tirthankarSchema);
