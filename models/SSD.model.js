const mongoose = require("mongoose");

const SSDchema = new mongoose.Schema({
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

module.exports = mongoose.models.SSD || mongoose.model("SSD", SSDchema);