import { Router } from "express";
import { registerUser } from "../controllers/user";

const router: Router = Router();

// auth
router.post("/register", registerUser);

export default router;
