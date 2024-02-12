const blogModel = require("../models/blogModel");


// Create Blog Controller
exports.blogController = async (req, res) => {
    try {
        const { title, description, category, file } = req.body;
        const blog = await new blogModel({ title, description, category, file, ...req.body }).save();
        return res.status(200).json({
            success: true,
            message: "Blog created",
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while creating the blog",
            error
        })
    }
}

// Get Single Blog
exports.singleBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await blogModel.findById({ _id: id });
        return res.status(200).json({
            success: false,
            message: "Blog is getting",
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while getting the blog",
            error
        })
    }
}

// Delete Blog
exports.deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await blogModel.findByIdAndDelete({ _id: id });
        return res.status(200).json({
            success: true,
            message: "Blog is deleting",
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Blog is deleted",
            error
        })
    }
}

// Get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        return res.status(200).json({
            success: true,
            message: "All blogs are getting",
            blogs
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while geting all blogs",
            error
        })
    }
}

// Update a blog
exports.updateBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const blog = await blogModel.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true });
        return res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog
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