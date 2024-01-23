const mongoose = require("mongoose");

const entranceSecSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    default: "Key",
  },
  camera: {
    type: Boolean,
    default: false,
  },
  features: {
    type: String,
    default: "No",
  },
});

const EntranceSec = mongoose.model("entranceSec", entranceSecSchema);

module.exports = EntranceSec;
