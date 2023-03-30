const mongoose = require("mongoose");

const CPUSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
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

module.exports = mongoose.models.CPU || mongoose.model("CPU", CPUSchema);
