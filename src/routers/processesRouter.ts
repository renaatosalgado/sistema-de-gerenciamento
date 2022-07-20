import { Router } from "express";
import processesController from "../controllers/processesController.js";

const processesRouter = Router();

processesRouter.get("/processes", processesController.findByStatus);

export default processesRouter;