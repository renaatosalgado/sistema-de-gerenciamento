import dayjs from "dayjs";
import { Router } from "express";
import processesController from "../controllers/processesController.js";

const processesRouter = Router();

processesRouter.get("/processes/status", processesController.findByStatus);
processesRouter.get("/processes/average", processesController.findByCompanyAndState);
processesRouter.get("/processes/value", processesController.filterByGreaterValue);
processesRouter.get("/processes", processesController.listAll);

export default processesRouter;

// dayjs("2007-09-05T00:00:00.000Z").month() +1