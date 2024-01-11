const express = require("express");
const {
  getSikharjiBlogs,
  getSikharjiTemples,
  getSikharjiImages,
} = require("../controllers/sikharjiController");

const router = express.Router();
router.get("/blog", getSikharjiBlogs);
router.get("/temples", getSikharjiTemples);
router.get("/images", getSikharjiImages);

module.exports = router;
