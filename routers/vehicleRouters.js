const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post("/", vehicleController.createVehicle);
router.get("/", vehicleController.findAll);
router.get("/:id", vehicleController.findById);
router.get("/", vehicleController.findByName);
router.patch("/:id",vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);



module.exports = router;