const newsModel = require("../models/newsModel");


// Create News Controller
exports.createNews = async (req, res) => {
    try {
        const { title, description, category, file } = req.body;
        const news = await new newsModel({ title, description, category, file, ...req.body }).save();
        return res.status(200).json({
            success: true,
            message: "News created",
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while creating the news",
            error
        })
    }
}

// Get Single news
exports.singleNews = async (req, res) => {
    const id = req.params.id;
    try {
        const news = await newsModel.findById({ _id: id });
        return res.status(200).json({
            success: true,
            message: "News is getting",
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while getting the news",
            error
        })
    }
}

// Delete News
exports.deleteNews = async (req, res) => {
    const id = req.params.id;
    try {
        const news = await newsModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            success: true,
            message: "News is deleting",
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "News is deleted",
            error
        })
    }
}

// Get all News
exports.getNews = async (req, res) => {
    try {
        const news = await newsModel.find({});
        return res.status(200).json({
            success: true,
            message: "All news are getting",
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while geting all news",
            error
        })
    }
}

// Update a news
exports.updateNews = async (req, res) => {
    const id = req.params.id;
    try {
        const news = await newsModel.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true });
        return res.status(200).json({
            success: true,
            message: "News updated successfully",
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while updating the blog",
            error
        })
    }
}