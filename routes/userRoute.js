const express = require("express");
const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  loginUser,
  adminAuth,
} = require("../controllers/userController");

const router = express.Router();
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", addUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/admin", adminAuth);

module.exports = router;
