const blogModel = require("../models/blogModel");

exports.addBlog = async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      body,
      image,
      category,
      subcategory,
      type,
    } = req.body;

    // validation
    if (!title || !description || !category) {
      return res.send({
        success: false,
        message: "Please fill all required fields!",
      });
    }
    // creating new blog
    const newBlog = new blogModel({
      title,
      author,
      description,
      body,
      image,
      category,
      subcategory,
      type,
    });
    await newBlog.save();

    return res.send({
      success: true,
      message: "Blog created successfully!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while creating Blog",
    });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
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
      message: "Error while getting all blogs!",
    });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    if (!blog) {
      return res.send({
        success: false,
        message: "No blog found with this ID",
      });
    }
    return res.send({
      success: true,
      message: "Blog find with ID!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting blog by ID",
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, body, description, author } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    return res.send({
      success: true,
      message: "blog updated",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while updating blog ",
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    return res.send({
      success: true,
      message: " Blog deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while deleting blog!",
    });
  }
};
