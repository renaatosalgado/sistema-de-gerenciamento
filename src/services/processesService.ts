import { Process } from "@prisma/client";
import processesRepository from "../repositories/processesRepository.js";

async function findByStatus(status: string): Promise<Process[]> {
    return await processesRepository.findByStatus(status);
}

async function findByCompanyAndState(company: string, state: string): Promise<Process[]> {
    return await processesRepository.findByCompanyAndState(company, state.toUpperCase());
}

async function filterByGreaterValue(value: number): Promise<Process[]> {
    return await processesRepository.filterByGreaterValue(value);
}

async function listAll(): Promise<Process[]> {
    return await processesRepository.listAll();
}

async function filterByName(number: string): Promise<Process[]> {
    return await processesRepository.filterByName(number);
}

export default {
    findByStatus,
    findByCompanyAndState,
    filterByGreaterValue,
    listAll,
    filterByName
}