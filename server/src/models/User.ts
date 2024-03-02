import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    contact_number: {
      type: Number,
    },
    socialMedia: {
      type: [String],
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
