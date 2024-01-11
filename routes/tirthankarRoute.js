const express = require("express");
const {
  getAllTirthankar,
  getTirthankarById,
  addTirthankar,
  updateTirthankar,
} = require("../controllers/tirthankarController");

const router = express.Router();

router.get("/", getAllTirthankar);
router.get("/:id", getTirthankarById);
router.post("/", addTirthankar);
router.put("/:id", updateTirthankar);

module.exports = router;
