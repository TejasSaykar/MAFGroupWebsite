const userModel = require("../models/userModel");

exports.userController = async (req,res) => {
    try {
        const {firstname, lastname, email, phone, message, subscribe, policy} = req.body;
        const user = await new userModel({firstname, lastname, email, phone, message, subscribe, policy}).save();
        return res.status(200).json({
            success: true,
            message: "Message send",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while sending the message",
            error
        })
    }
}