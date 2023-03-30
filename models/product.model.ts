import { ProdType } from "@/pages/api/products";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema<ProdType>({
  name: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "case",
      "cooler",
      "cpu",
      "graphiccard",
      "hdd",
      "mainboard",
      "power",
      "ram",
      "ssd",
    ],
    require: true,
  },
});

const Products =
  mongoose.models.product || mongoose.model<ProdType>("product", ProductSchema);
export { Products };
