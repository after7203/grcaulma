const mongoose = require("mongoose");

const MBSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.mainboard || mongoose.model("mainboard", MBSchema);
