const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name"],
  },
  email: {
    type: String,
    required: [true, "No email"],
  },
  password: {
    type: String,
    required: [true, "No pass"],
  },
});

const User = mongoose.model("profile", profileSchema);

module.exports = User;
