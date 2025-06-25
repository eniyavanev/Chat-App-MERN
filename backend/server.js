// one to chat, one to many chat, create group, persist chats, authetication,authorization
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./src/Middleware/connectDB.js");
const userRoutes = require("./src/Routes/userRoutes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));//to serve static files from uploads folder

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

connectDB();

app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 8001, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 8001} in ${process.env.NODE_ENV } mode`
  );
});
