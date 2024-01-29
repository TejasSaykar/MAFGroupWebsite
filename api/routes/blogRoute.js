const express = require("express");
const { blogController, singleBlog, deleteBlog } = require("../controllers/blogController");

const router = express.Router();

router.post("/create-blog", blogController);

router.get("/get-blog/:id", singleBlog);

router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;