const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // validation
    if (!username || !email || !password) {
      return res.send({
        success: false,
        message: "Please fill required fields",
      });
    }
    //  If already a user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({
        success: false,
        message: "User already exist, try login!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // save new user to DB
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return res.send({
      success: true,
      message: "User created!",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while creating User!",
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.send({
      success: true,
      message: "All user data is here!",
      userCount: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting All users!",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.send({
        success: false,
        message: "Please fill info...",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({
        success: false,
        message: "User not exists!",
      });
    }
    //  for password decrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send({
        success: false,
        message: " Wrong password!",
      });
    }
    return res.send({
      success: true,
      message: "Login successfilly!",
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "User Login ERROR!",
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.send({
        success: false,
        message: "User not exist!",
      });
    }
    return res.send({
      success: true,
      message: "Fetch single user by ID",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while getting user y ID",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email } = req.body;
    const user = await userModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.send({
      success: true,
      message: "User updated successfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while updating user!",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.send({
      success: true,
      message: "User deleted successfull!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while deleting User!",
    });
  }
};
exports.adminAuth = async (req, res) => {
  try {
    const { password } = req.body;
    if (password !== "6569") {
      return res.send({
        success: false,
        message: "Enter correct password!",
      });
    }
    return res.send({
      success: true,
      message: "Welcome admin!",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "Error while Admin login",
    });
  }
};
