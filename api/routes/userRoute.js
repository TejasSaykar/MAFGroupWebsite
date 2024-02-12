const express = require("express");
const { userController } = require("../controllers/userController");
const { sendMail } = require("../utils/sendMail");

const router = express.Router();

router.post("/contact", userController);

router.post("/sendmail", sendMail);


module.exports = router;