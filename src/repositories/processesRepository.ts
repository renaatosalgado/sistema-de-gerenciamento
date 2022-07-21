import { prisma } from "../database.js";

async function findByStatus(status: string) {
	return await prisma.process.findMany({
		where: {
			status: {
				name: {
					equals: status
				}
			}
		}
	});
}

async function findByCompanyAndState(company: string, state: string) {
	return await prisma.process.findMany({
		where: {
			AND: {
				company: {
					name: {
						equals: company
					}
				},
				state: {
					name: {
						equals: state
					}
				}
			}
		}
	});
}

async function filterByGreaterValue(value: number) {
	return prisma.process.findMany({
		where: {
			value: {
				gt: value
			}
		}
	});
}

async function listAll() {
	return await prisma.process.findMany({
		include: {
			company: {
				select: {
					stateId: true,
					name: true
				}
			}
		}
	});
}

async function filterByName(number: string) {
	return prisma.process.findMany({
		where: {
			number: {
				contains: number,
				mode: 'insensitive'
			}
		}
	});
}

export default {
	findByStatus,
	findByCompanyAndState,
	filterByGreaterValue,
	listAll,
	filterByName
}