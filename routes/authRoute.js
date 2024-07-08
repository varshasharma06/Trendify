const express = require("express");
const { createUser } = require("../controller/userCtrl");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", createUserCtrl);
module.exports = router;