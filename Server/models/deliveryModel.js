const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  package_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
    required: true,
  },
  pickup_time: { type: Date, default: null },
  start_time: { type: Date, default: null },
  end_time: { type: Date, default: null }, 
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  status: {
    type: String,
    enum: ["open", "picked-up", "in-transit", "delivered", "failed"],
    default: "open",
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Delivery = mongoose.model("Delivery", deliverySchema, "deliveries");

module.exports = Delivery;
