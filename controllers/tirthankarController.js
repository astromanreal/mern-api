const tirthankarModel = require("../models/tirthankarModel");

exports.getAllTirthankar = async (req, res) => {
  try {
    const tirthankar = await tirthankarModel.find({});
    if (!tirthankar) {
      return res.send({
        success: false,
        message: "No Tirthankar exist!",
      });
    }
    return res.send({
      success: true,
      count: tirthankar.length,
      message: "All tirthankars",
      tirthankar,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting Tirthankar",
    });
  }
};

exports.getTirthankarById = async (req, res) => {
  try {
    const tirthankar = await tirthankarModel.findById(req.params.id);
    if (!tirthankar) {
      return res.send({
        success: false,
        message: "No tirthankar exist with this ID!",
      });
    }
    return res.send({
      success: true,
      message: "fetched Tirthankar with ID",
      tirthankar,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting Tirthankar by ID",
    });
  }
};

exports.addTirthankar = async (req, res) => {
  try {
    const {
      name,
      image,
      lifespan,
      nirvana,
      qualities,
      teachings,
      symbol,
      color,
      tree,
      festivels,
      nickname,
      birth,
      ranks,
      introduction,
      body,
    } = req.body;
    if (!name) {
      return res.send({
        success: false,
        message: "Please fill all Required fields!",
      });
    }
    const newTirthankar = new tirthankarModel({
      name,
      lifespan,
      teachings,
      qualities,
      image,
      nirvana,
      symbol,
      color,
      tree,
      festivels,
      nickname,
      birth,
      ranks,
      introduction,
      body,
    });
    await newTirthankar.save();
    return res.send({
      success: true,
      message: "Tirthankar created!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while creating Tirthankar",
    });
  }
};

exports.updateTirthankar = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lifespan, teachings, qualities, image, nirvana } = req.body;
    const tirthankar = await tirthankarModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.send({
      success: true,
      message: "Tirthankar updated!",
      tirthankar,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while updating",
    });
  }
};
