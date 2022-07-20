import { Request, Response } from "express";
import processesService from "../services/processesService.js";

async function findByStatus(req: Request, res: Response) {
    const { status } = req.query;
    const activeProcesses = await processesService.findByStatus(status as string);

    res.status(200).send(activeProcesses)
}

async function findByCompanyAndState(req: Request, res: Response) {
    const { company, state } = req.query;
    const result = await processesService.findByCompanyAndState(company as string, state as string)

    res.status(200).send(result)
}

export default {
    findByStatus,
    findByCompanyAndState
}