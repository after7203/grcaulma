const mongoose = require("mongoose");

const Powerchema = new mongoose.Schema({
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

module.exports = mongoose.models.power || mongoose.model("power", Powerchema);
