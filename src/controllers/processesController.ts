import { Request, Response } from "express";
import processesService from "../services/processesService.js";

async function findByStatus(req: Request, res: Response) {
    const { name } = req.query;
    const activeProcesses = await processesService.findByStatus(name as string);

    res.status(200).send(activeProcesses);
}

async function findByCompanyAndState(req: Request, res: Response) {
    const { company, state } = req.query;
    const result = await processesService.findByCompanyAndState(company as string, state as string);

    res.status(200).send(result);
}

async function filterByGreaterValue(req: Request, res: Response) {
    const { greaterThan } = req.query;
    const result = await processesService.filterByGreaterValue(+greaterThan);

    res.status(200).send(result);
}

async function listAll(req: Request, res: Response) {
    const processes = await processesService.listAll();

    res.status(200).send(processes);
}

export default {
    findByStatus,
    findByCompanyAndState,
    filterByGreaterValue,
    listAll    
}