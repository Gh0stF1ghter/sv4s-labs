const mongoose = require("mongoose");

const doorSecSchema = new mongoose.Schema(
  {
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
    accessType: {
      type: String,
      default: "Key",
    },
    power: {
      type: String,
      default: "No",
    },
  },
);

const DoorSec = mongoose.model("doorSec", doorSecSchema);

module.exports = DoorSec;