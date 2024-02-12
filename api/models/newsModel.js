const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    keyword: {
        type: [String],
        default: []
    },
    meta: {
        type: [String],
        default: []
    }

}, { timestamps: true });

module.exports = mongoose.model("news", newsSchema);