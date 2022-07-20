import processesRepository from "../repositories/processesRepository.js";

async function findByStatus(status: string) {
    return await processesRepository.findByStatus(status)
}

async function findByCompanyAndState(company: string, state: string) {
    return await processesRepository.findByCompanyAndState(company, state);
}

async function filterByGreaterValue(value: number) {
    return await processesRepository.filterByGreaterValue(value)
}

export default {
    findByStatus,
    findByCompanyAndState,
    filterByGreaterValue
}