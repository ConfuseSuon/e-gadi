import { Router } from "express";
import {
  getAllCar,
  getCarBrand,
  getCarById,
  getCarModel,
} from "../controllers/compareCar";

const router: Router = Router();

router.get("/carbrand", getCarBrand);
router.get("/carModel", getCarModel);
router.get("/car-list/all", getAllCar);
router.get("/car-list/:id", getCarById);

export default router;
