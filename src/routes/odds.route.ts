import { Router } from "express";
import { oddsController } from "../controllers";

const router = Router();

router.get("/eventTypes", oddsController.getEventTypes)
router.get("/events", oddsController.getEvents);
router.get("/markets", oddsController.getMarkets)

export default router;
