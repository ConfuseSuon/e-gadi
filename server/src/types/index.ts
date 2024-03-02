import { Document } from "mongoose";

export interface IUser extends Document {
  full_name: string;
  email: string;
  password: string;
  address?: string;
  contact_number?: number;
  socialMedia?: string[];
}

export interface INewCar extends Document {
  carBrand: string;
  carModel: string;
  description: string;
  bodyStyles: string;
  range: number;
  topSpeed: number;
  charging_0_to_100: number;
  seatingCapacity: number;
  price: number;
  imageURL: string;
  createdBy: string;
}

export interface IUsedCar extends Document {
  car_brand: string;
  car_model: string;
  ownership: string;
  price: string;
  kms_driven: number;
  address: string;
  image_urls: string;
  description: string;
  createdBy: string;
}
