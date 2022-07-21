import { Router } from "express";
import processesRouter from "./processesRouter.js";

const router = Router();

router.use(processesRouter);
router.get('/', (req, res) => {
    res.send('Hmmm, parece que essa API está nos Trinks!')
})

export default router;