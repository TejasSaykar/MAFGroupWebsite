const express = require("express");
const { blogController, singleBlog, deleteBlog, getBlogs, updateBlog } = require("../controllers/blogController");

const router = express.Router();

router.post("/create-blog", blogController);

router.get("/get-blog/:id", singleBlog);

router.delete("/delete-blog/:id", deleteBlog);

router.get("/all-blogs", getBlogs);

router.put("/update-blog/:id", updateBlog);

module.exports = router;