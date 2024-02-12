const express = require("express");
const { createNews, getNews, singleNews, deleteNews, updateNews } = require("../controllers/newsController");

const router = express.Router();

router.post("/create-news", createNews);

router.get("/get-news", getNews);

router.get("/single-news/:id", singleNews);

router.delete("/delete-news/:id", deleteNews);

router.put("/update-news/:id", updateNews)

module.exports = router