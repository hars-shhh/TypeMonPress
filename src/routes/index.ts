import { Router } from "express";
import oddsRoute from "./odds.route";

const router = Router();

router.use("/odds", oddsRoute);

export { router };
