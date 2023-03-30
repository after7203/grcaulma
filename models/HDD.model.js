const mongoose = require("mongoose");

const HDDchema = new mongoose.Schema({
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

module.exports = mongoose.models.HDD || mongoose.model("HDD", HDDchema);
