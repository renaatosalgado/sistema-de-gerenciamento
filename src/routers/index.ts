import { Router } from "express";
import processesRouter from "./processesRouter.js";

const router = Router();

router.use(processesRouter);

export default router;