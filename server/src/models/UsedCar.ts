import mongoose, { Schema } from "mongoose";
import { IUsedCar } from "../types";

const usedCarSchema: Schema<IUsedCar> = new mongoose.Schema(
  {
    car_brand: { type: String, required: true },
    car_model: { type: String, required: true },
    ownership: { type: String, required: true },
    price: { type: String, required: true },
    kms_driven: { type: Number, required: true },
    address: { type: String, required: true },
    image_urls: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUsedCar>("UsedCar", usedCarSchema);

export default User;
