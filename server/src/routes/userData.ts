import { Router } from "express";
import { getCurrentUser } from "../controllers/userData";

const router: Router = Router();

// auth
router.get("/current-user", getCurrentUser);

export default router;
