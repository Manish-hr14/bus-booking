const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    name: String,
    fare: Number,
    categories: String,
    pickupPoint: String,
    DropPoint: String,

});
 const Bus =mongoose.model('Bus',busSchema);
 module.exports = Bus;