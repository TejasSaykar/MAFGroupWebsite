const express = require("express");
const { userController } = require("../controllers/userController");

const router = express.Router();

router.post("/contact", userController);


module.exports = router;