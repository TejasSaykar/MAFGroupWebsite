const express = require("express");
const { userController, demoController, getUsers, deleteUser, getDemos, deleteDemo } = require("../controllers/userController");
const { sendMail } = require("../utils/sendMail");

const router = express.Router();

router.post("/contact", userController);

router.post("/sendmail", sendMail);

router.get("/users", getUsers)

router.delete("/user/:id", deleteUser);

router.post("/demo", demoController);

router.get("/demos", getDemos);

router.delete("/demo/:id", deleteDemo)

module.exports = router;
