const userModel = require("../models/userModel");
const demoModel = require("../models/demoModel");

// User Controllers
exports.userController = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message, subscribe, policy } =
      req.body;
    const user = await new userModel({
      firstname,
      lastname,
      email,
      phone,
      message,
      subscribe,
      policy,
    }).save();
    return res.status(200).json({
      success: true,
      message: "Message send",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while sending the message",
      error,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all users",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the users",
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "User deleted",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the user",
      error,
    });
  }
};

// Demo Controllers
exports.demoController = async (req, res) => {
  try {
    const demo = await new demoModel({ ...req.body }).save();
    return res.status(201).json({
      success: true,
      message: "Getting all demo requests",
      demo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the demo requests",
      error,
    });
  }
};

exports.getDemos = async (req, res) => {
  try {
    const demos = await demoModel.find({});
    return res.status(200).json({
      success: true,
      message: "Getting all demos",
      demos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getting the demos",
      error,
    });
  }
};

exports.deleteDemo = async (req, res) => {
  const { id } = req.params;
  try {
    const demo = await demoModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      message: "Demo deleted",
      demo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the demo",
      error,
    });
  }
};
