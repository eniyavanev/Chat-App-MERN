const express = require("express");
const router = express.Router();
const { registerUser, loginUser,getAllUsers } = require("../Controllers/userController.js");
const { isAuthenticated } = require("../Middleware/authMiddleware.js");
const upload = require("../Utils/multer.js");

router.post("/register",upload.single("pic"), registerUser);
router.post("/login", loginUser);

router.get("/users", isAuthenticated, getAllUsers);

module.exports = router;