const express = require("express");
const {
  addImageController,
  getTempleImage,
  getMountainImage,
} = require("../controllers/imageController");
const router = express.Router();

router.post("/", addImageController);
router.get("/temple", getTempleImage);
router.get("/mountain", getMountainImage);

module.exports = router;
