const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    subscribe :{
        type: Boolean,
        default: false
    },

    policy: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);