const express = require("express");
const {
  getJainismBlogs,
  getJainismPhilosophy,
  getJainismPrinciples,
  getJainismPractices,
  getJainismArts,
} = require("../controllers/jainismController");
const router = express.Router();

router.get("/", getJainismBlogs);
router.get("/art", getJainismArts);
router.get("/philosophy", getJainismPhilosophy);
router.get("/principles", getJainismPrinciples);
router.get("/practices", getJainismPractices);

module.exports = router;
