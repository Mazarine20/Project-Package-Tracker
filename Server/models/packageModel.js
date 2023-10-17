const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  active_delivery_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Delivery",
  },
  description: { type: String },
  weight: { type: Number },
  width: { type: Number },
  height: { type: Number },
  depth: { type: Number },
  from_name: { type: String },
  from_address: { type: String },
  from_location: {
    type: { type: String },
    coordinates: [Number],
  },
  to_name: { type: String },
  to_address: { type: String },
  to_location: {
    type: { type: String },
    coordinates: [Number],
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Package = mongoose.model("Package", packageSchema, "packages");

module.exports = Package;
