const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

<<<<<<< HEAD
// router.post("/register", authController.register);
// router.post("/login", authController.login);
router.post("/register", authController.registerOrLogin);
router.post("/login", authController.registerOrLogin);
=======
router.post("/register", authController.registerProfile);
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008

module.exports = router;