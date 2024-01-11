const express = require("express");
const {
  getAllDiary,
  getDiaryById,
  addDiary,
  updateDiary,
  deleteDiary,
} = require("../controllers/travelDiaryController");

const router = express.Router();

router.get("/", getAllDiary);
router.get("/:id", getDiaryById);
router.post("/", addDiary);
router.put("/:id", updateDiary);
router.delete("/:id", deleteDiary);

module.exports = router;
