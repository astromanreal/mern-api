const templeModel = require("../models/templeModel");

exports.addTemple = async (req, res) => {
  try {
    const {
      name,
      introduction,
      architecture,
      god,
      place,
      nickname,
      location,
      description,
      image,
      height,
      visitor,
      createdDate,
    } = req.body;

    // validation
    if (!name || !height || !description) {
      return res.send({
        success: false,
        message: "Please fill all Required feilds!",
      });
    }
    const newTemple = new templeModel({
      name,
      introduction,
      architecture,
      god,
      place,
      nickname,
      location,
      description,
      image,
      height,
      visitor,
      createdDate,
    });
    await newTemple.save();
    return res.send({
      success: true,
      message: "Temple created!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while creating temples!",
    });
  }
};

exports.getAllTemples = async (req, res) => {
  try {
    const temple = await templeModel.find({});
    if (!temple) {
      return res.send({
        success: false,
        message: "No temples found!",
      });
    }
    return res.send({
      success: true,
      count: temple.length,
      message: "Here is all temples!",
      temple,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting All temples!",
    });
  }
};

exports.getTempleById = async (req, res) => {
  try {
    const temple = await templeModel.findById(req.params.id);
    if (!temple) {
      return res.send({
        success: false,
        message: "No temple exist with this ID!",
      });
    }
    return res.send({
      success: true,
      message: "A temple by ID",
      temple,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting Temple By ID",
    });
  }
};

exports.updateTemple = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, description, image, height, visitor, createdDate } =
      req.body;
    const temple = await templeModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.send({
      success: true,
      message: "Temple updated successfully!",
      temple,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while updating temple!",
    });
  }
};

exports.deleteTemple = async (req, res) => {
  try {
    const temple = await templeModel.findByIdAndDelete(req.params.id);
    return res.send({
      success: true,
      message: "Temple deleted successfully!",
      temple,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while deleting temple!",
    });
  }
};
