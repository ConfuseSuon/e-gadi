import { Request, Response } from "express";
import NewCar from "../../models/NewCar";
import { INewCar } from "../../types";
import { Generic_Msg } from "../../utils/constant";

export const getCarBrand = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const carBrand = await NewCar.aggregate([
      {
        $group: {
          _id: "$carBrand", // Grouping by carBrand
        },
      },
      {
        $project: {
          _id: 0,
          carBrand: "$_id", // Reshaping the data
        },
      },
    ]);
    return res
      .status(200)
      .json({ message: Generic_Msg.Get_All, data: carBrand });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const getCarModel = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const carModel = await NewCar.aggregate([
      {
        $group: {
          _id: "$carModel", // Grouping by carBrand
        },
      },
      {
        $project: {
          _id: 0,
          carBrand: "$_id", // Reshaping the data
        },
      },
    ]);
    return res
      .status(200)
      .json({ message: Generic_Msg.Get_All, data: carModel });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const getAllCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const cars = await NewCar.find({}, { carBrand: 1, carModel: 1 });

    const combinedData = cars.map((car) => ({
      id: car._id,
      car: `${car.carBrand} ${car.carModel}`,
    }));

    return res
      .status(200)
      .json({ message: Generic_Msg.Get_All, data: combinedData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const getCarById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;
    const car: INewCar | null = await NewCar.findById(id);

    if (!car) {
      return res.status(404).json({ message: "Car not found", data: {} });
    }
    return res.status(200).json({ message: Generic_Msg.Get_By_Id, data: car });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};
