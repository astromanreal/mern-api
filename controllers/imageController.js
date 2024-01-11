const imageModel = require("../models/imageModel");

exports.addImageController = async (req, res) => {
  try {
    const { title, url, category, subcategory, description } = req.body;

    // validation
    if (!title || !url || !category || !subcategory) {
      return res.send({
        success: false,
        message: "Please fill all required fields!",
      });
    }
    // creating new blog
    const newImg = new imageModel({
      title,
      url,
      category,
      subcategory,
      description,
    });
    await newImg.save();
    return res.send({
      success: true,
      message: "Image added successfully!",
      newImg,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error in posting the Image",
    });
  }
};

exports.getMountainImage = async (req, res) => {
  try {
    const images = await imageModel.find({
      category: "paasnath",
      subcategory: "mountain",
    });
    return res.send({
      success: true,
      message: "Only mountain image",
      images,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error in fetchng mountain image",
    });
  }
};

exports.getTempleImage = async (req, res) => {
  try {
    const images = await imageModel.find({ subcategory: "temple" });
    return res.send({
      success: true,
      message: "Only temple image",
      images,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error in fetchng temple image",
    });
  }
};
