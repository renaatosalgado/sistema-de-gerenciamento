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

async function filterByName(req: Request, res: Response) {
    const { number } = req.query;
    const result = await processesService.filterByName(number as string);

    res.status(200).send(result);
}

export default {
    findByStatus,
    findByCompanyAndState,
    filterByGreaterValue,
    listAll,
    filterByName
}