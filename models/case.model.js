const mongoose = require("mongoose");

const Casechema = new mongoose.Schema({
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

module.exports = mongoose.models.case || mongoose.model("case", Casechema);
