const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 9,
      max: 30,
    },
    picture: {
      type: String,
    },
    isAdmin: {
      type: String,
    },
    token: {
      type: String,
      default: "",
    },
    // posts: [{ type: mongoose.Types.ObjectId, ref: "TravelDiary" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
