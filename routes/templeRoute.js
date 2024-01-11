const express = require("express");
const {
  getAllTemples,
  getTempleById,
  addTemple,
  updateTemple,
  deleteTemple,
} = require("../controllers/templeController");

const router = express.Router();

router.get("/", getAllTemples);
router.get("/:id", getTempleById);
router.post("/", addTemple);
router.put("/:id", updateTemple);
router.delete("/:id", deleteTemple);

module.exports = router;
