const express = require("express");
const {
  getAllBlog,
  updateBlog,
  addBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getAllBlog);
router.get("/:id", getBlogById);
router.post("/", addBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
