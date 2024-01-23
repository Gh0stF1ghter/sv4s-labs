const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  use: {
    type: String,
    default: "outdoor",
  },
  focusDistance: {
    type: String,
    default: "",
  },
  lighting: {
    type: Boolean,
    default: false,
  },
  lightingType: {
    type: String,
    default: "",
  },
  viewAngle: {
    type: Number,
    default: 0,
  },
});

const Camera = mongoose.model("camera", cameraSchema);

module.exports = Camera;
