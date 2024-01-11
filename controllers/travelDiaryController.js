const travelDiaryModel = require("../models/travelDiaryModel");

exports.addDiary = async (req, res) => {
  try {
    const { title, image, description, date, location } = req.body;
    if (!title || !description || !location) {
      return res.send({
        success: false,
        message: "Please fill all Required fields!",
      });
    }
    const newDiary = travelDiaryModel({
      title,
      image,
      description,
      date,
      location,
    });

    await newDiary.save();
    return res.send({
      success: true,
      message: "Your Diary created successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while creating diary",
    });
  }
};

exports.getAllDiary = async (req, res) => {
  try {
    const diary = await travelDiaryModel.find({});
    if (!diary) {
      return res.send({
        success: false,
        message: "No Diary exist!",
      });
    }
    return res.send({
      success: true,
      count: diary.length,
      message: "All diary ",
      diary,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting All Diary",
    });
  }
};

exports.getDiaryById = async (req, res) => {
  try {
    const diary = await travelDiaryModel.findById(req.params.id);
    if (!diary) {
      return res.send({
        success: false,
        message: "Nodiary found with this ID",
      });
    }
    return res.send({
      success: true,
      message: "Fetch Diary By ID",
      diary,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting diary by ID",
    });
  }
};

exports.updateDiary = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location, date, image } = req.body;
    const diary = await travelDiaryModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.send({
      success: true,
      message: "Diary updated successfully",
      diary,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while updating diary",
    });
  }
};

exports.deleteDiary = async (req, res) => {
  try {
    const diary = await travelDiaryModel.findByIdAndDelete(req.params.id);
    return res.send({
      success: true,
      message: "Diary deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while deleting a diary",
    });
  }
};
