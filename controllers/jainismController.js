const blogModel = require("../models/blogModel");

exports.getJainismBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({ category: "jainism" });
    if (!blogs) {
      throw new Error("No Jain Blogs found");
    }
    return res.send({
      success: true,
      message: "Jainism blog found",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Not jainism content",
    });
  }
};

exports.getJainismArts = async (req, res) => {
  try {
    const blogs = await blogModel.find({
      category: "jainism",
      subcategory: "art",
    });
    if (!blogs) {
      throw new Error("no Arts found");
    }
    return res.send({
      success: true,
      message: "All jain Arts blog",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Not working",
    });
  }
};

exports.getJainismPhilosophy = async (req, res) => {
  try {
    const blogs = await blogModel.find({
      category: "jainism",
      subcategory: "philosophy",
    });
    if (!blogs) {
      throw new Error("no philosophical articles");
    }
    return res.send({
      success: true,
      message: "All philosphy blogs",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Not working",
    });
  }
};

exports.getJainismPrinciples = async (req, res) => {
  try {
    const blogs = await blogModel.find({
      category: "jainism",
      subcategory: "principle",
    });
    if (!blogs) {
      throw new Error("No user principle");
    }
    return res.send({
      success: true,
      message: "Fetch all jainism principles",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Not working",
    });
  }
};

exports.getJainismPractices = async (req, res) => {
  try {
    const blogs = await blogModel.find({
      category: "jainism",
      subcategory: "practices",
    });
    if (!blogs) {
      throw new Error("no practices");
    }
    return res.send({
      success: true,
      message: "All jain principles",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Not working",
    });
  }
};
