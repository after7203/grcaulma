const mongoose = require("mongoose");

const Coolerchema = new mongoose.Schema({
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
  mongoose.models.cooler || mongoose.model("cooler", Coolerchema);
