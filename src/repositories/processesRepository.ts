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
	})
}

async function findByCompanyAndState(company: string, state: string) {
	return await prisma.process.findMany({
		where: {
			AND: {
				company: {
					name: {
						equals: company.toUpperCase()
					}
				},
				state: {
					name: {
						equals: state.toUpperCase()
					}
				}
			}
		}
	})
}

async function filterByGreaterValue(value: number) {
	return prisma.process.findMany({
		where: {
			value: {
				gt: value
			}
		}
	})
}

async function listAll() {
	return await prisma.process.findMany({
		include: {
			company: {
				select: {
					stateId: true
				}
			}
		}
	});
}

async function filterByName() {
	return prisma.process.findMany({
		where: {
			number: {
				contains: "trab",
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