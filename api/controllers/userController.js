const userModel = require("../models/userModel");

exports.userController = async (req,res) => {
    try {
        const {username, email, phone, message} = req.body;
        const user = await new userModel({username, email, phone, message}).save();
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