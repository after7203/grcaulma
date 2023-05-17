import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { Products } from "@/models/product.model";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "grcaulma",
    });
    const products = await Products.find();
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
}
