const multer = require("multer");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const fileFilter = (req, file, cb) => {
  const ext = MIME_TYPE[file.mimetype];
  if (ext) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.trim();
    const ext = MIME_TYPE[file.mimetype];
    cb(null, new Date().getTime() + "-" + filename + "." + ext);
  },
});

module.exports = multer({ storage: storage, fileFilter: fileFilter }).single(
  "image"
);
