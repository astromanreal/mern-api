const blogModel = require("../models/blogModel");
const templeModel = require("../models/templeModel");
const imageModel = require("../models/imageModel");

exports.getSikharjiBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({ category: "sikharji" });

    if (!blogs) {
      return res.send({
        success: false,
        message: "No blog exist!",
      });
    }
    return res.send({
      success: true,
      message: " All blogs!",
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "not possible bro!!",
    });
  }
};

exports.getSikharjiTemples = async (req, res) => {
  try {
    const temples = await templeModel.find({});
    if (!temples) {
      return res.status(401).json("no data found");
    }
    return res.send({
      success: true,
      message: "All sikharji temples",
      temples,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "not possible bro!!",
    });
  }
};

exports.getSikharjiImages = async (req, res) => {
  try {
    const images = await imageModel.find({});
    if (!images) {
      return res.send({
        success: false,
        message: "there is no images",
      });
    }
    return res.send({
      success: true,
      message: "Here is all images",
      images,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while fetching Sikharji GALLERY",
    });
  }
};
