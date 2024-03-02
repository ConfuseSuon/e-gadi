import { Router } from "express";
import {
  addUsedCar,
  deleteUsedCar,
  getUsedCarById,
  getUsedCars,
  updateUsedCar,
} from "../controllers/usedCar";

const router: Router = Router();

// auth
router.get("/used-car/all", getUsedCars);
router.get("/used-car/get-by-id/:id", getUsedCarById);
router.post("/used-car/add", addUsedCar);
router.put("/used-car/update/:id", updateUsedCar);
router.delete("/used-car/delete/:id", deleteUsedCar);

export default router;
