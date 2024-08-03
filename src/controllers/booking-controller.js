const BookingService = require("../services/booking-service");

const { StatusCodes } = require("http-status-codes");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    // console.log("FROM BOOKING CONTROLLER", response);
    return res.status(StatusCodes.OK).json({
      message: "Successfully completed booking",
      success: true,
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      success: false,
      err: error.explanation,
      data: {},
    });
  }
};

module.exports = { create };
