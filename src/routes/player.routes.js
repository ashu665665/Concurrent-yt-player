import { Router } from "express";
import { player } from "../controllers/playerController.js";
import { home } from "../controllers/homepage.js";

const router = Router();

router.get("/", home);
router.post("/watch", player)

export default router;