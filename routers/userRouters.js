const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.get("/", userController.getAll);
router.get("/:id");
router.patch("/:id", userController.editUser);
router.delete("/:id", userController.removeUser);

module.exports = router;
