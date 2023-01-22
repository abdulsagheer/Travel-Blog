const {
	getAllUsers,
	signup,
	login,
} = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
