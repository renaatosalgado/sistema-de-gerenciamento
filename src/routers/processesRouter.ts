import { Router } from "express";
import processesController from "../controllers/processesController.js";

const processesRouter = Router();

processesRouter.get("/processes/status", processesController.findByStatus);
processesRouter.get("/processes/average", processesController.findByCompanyAndState);


export default processesRouter;