const express = require("express");

const bookingController = require("../../controllers/booking-controller");

const router = express.Router();

router.post("/createBooking", bookingController.create);

module.exports = router;
