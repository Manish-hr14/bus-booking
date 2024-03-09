// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  busId: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model('Booking', bookingSchema);
