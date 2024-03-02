import { Request, Response } from "express";
import UsedCar from "../../models/UsedCar";
import { IUsedCar } from "../../types";
import { Generic_Msg } from "../../utils/constant";

export const getUsedCars = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const usedCars: IUsedCar[] = await UsedCar.find();
    return res
      .status(200)
      .json({ message: Generic_Msg.Get_All, data: usedCars });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const getUsedCarById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;

    const usedCar: IUsedCar | null = await UsedCar.findById(id);

    if (!usedCar) {
      return res.status(404).json({ message: "Car not found", data: {} });
    }
    return res
      .status(200)
      .json({ message: Generic_Msg.Get_By_Id, data: usedCar });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const addUsedCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      car_brand,
      car_model,
      ownership,
      price,
      kms_driven,
      address,
      image_urls,
      description,
    } = req.body as Pick<
      IUsedCar,
      | "car_brand"
      | "car_model"
      | "ownership"
      | "price"
      | "kms_driven"
      | "address"
      | "image_urls"
      | "description"
    >;

    const { id: creatorId } = (req as any)?.user;
    if (!creatorId)
      return res.status(401).json({ message: "Unauthorized access", data: {} });

    // Save Into Database
    const data = new UsedCar({
      car_brand,
      car_model,
      ownership,
      price,
      kms_driven,
      address,
      image_urls,
      description,
      createdBy: creatorId,
    });

    const addedUsedCar: IUsedCar | null = await data.save();

    return res
      .status(200)
      .json({ message: Generic_Msg.Add, data: addedUsedCar });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const updateUsedCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const updatedUsedCar: IUsedCar | null = await UsedCar.findByIdAndUpdate(
      { _id: id },
      body
    );

    if (!updatedUsedCar)
      return res.status(400).json({ message: "Car not found", data: {} });

    return res.status(200).json({
      message: Generic_Msg.Update,
      data: updatedUsedCar,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};

export const deleteUsedCar = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;
    const deletedUsedCar: IUsedCar | null = await UsedCar.findByIdAndDelete(id);

    if (!deletedUsedCar) {
      return res.status(404).json({ message: "Car not found", data: {} });
    }
    return res.status(200).json({
      message: Generic_Msg.Delete,
      data: deletedUsedCar,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Generic_Msg.Server_Error, error: error });
  }
};