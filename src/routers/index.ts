import { Router } from "express";
import processesRouter from "./processesRouter.js";

const router = Router();

router.use(processesRouter);
router.get('/', (req, res) => {
    res.send('Olá, esta é uma API simples, para ser consumida em testes.')
})

export default router;