import { Router } from "express";
import processesRouter from "./processesRouter.js";

const router = Router();

router.use(processesRouter);
router.get('/', (req, res) => {
    res.send('Olá, está tudo nos Trinks por aqui!')
})

export default router;