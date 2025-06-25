const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/Profile");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageTypes = ["image/jpeg", "image/png", "image/jpg"];

const fileFilter = (req, file, cb) => {
  if (imageTypes.includes(file.mimetype)) {
    cb(null, true); // accept file
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png formats allowed!"), false); // reject file
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = upload;
