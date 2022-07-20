import dayjs from "dayjs";
import { Router } from "express";
import processesController from "../controllers/processesController.js";

const processesRouter = Router();

processesRouter.get("/processes/status", processesController.findByStatus);
processesRouter.get("/processes/average", processesController.findByCompanyAndState);
processesRouter.get("/processes/value", processesController.filterByGreaterValue);
processesRouter.get("/processes", processesController.listAll);
processesRouter.get("/processes/number", processesController.filterByName)

export default processesRouter;
