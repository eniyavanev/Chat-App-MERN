const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });


const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.token ||
    (req.headers.authorization?.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : null);
  //console.log("Received token:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied! Please login to continue.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("Decoded token:", decoded);

    req.user = await User.findById(decoded.id).select("-password");
    //console.log("Authenticated user:", req.user);

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({
      success: false,
      message: "Session expired or token is invalid. Please login again.",
    });
  }
});

// Middleware to check if the logged-in user has one of the allowed roles
const isAuthorized = (...roles) => {
  return (req, res, next) => {
    // Ensure req.user is present (should be set by auth middleware like `protect`)
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized! User information is missing.",
      });
    }

    // Check if user's role is included in allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message:
          "Access denied! You do not have permission to perform this action.",
      });
    }

    // User is authorized
    next();
  };
};

module.exports = { isAuthenticated, isAuthorized };
