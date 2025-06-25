const User = require("../Models/userModel.js");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../Middleware/generateToken.js");
const fs = require("fs");
// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let pic;

  if (req.file) {
    // pic = `${req.protocol}://${req.get("host")}/uploads/Profile/${req.file.filename}`
    pic = `${process.env.BACKEND_URL}/uploads/Profile/${req.file.filename}`;
  }
  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords do not match");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    fs.unlinkSync(req.file.path);
    throw new Error("User already exists");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400);
    throw new Error("Please enter a valid email address");
  }

  if (password.length < 8 || password.length > 10) {
    res.status(400);
    throw new Error("Password must be 8 to 10 characters");
  }

  if (password.includes(" ")) {
    res.status(400);
    throw new Error("Password cannot contain spaces");
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
  if (!passwordRegex.test(password)) {
    res.status(400);
    throw new Error(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Set token in cookie

  // Don't return token in response body — it's already in cookie
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    },
    token: generateToken(user._id, res),
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = { registerUser, loginUser, getAllUsers };
