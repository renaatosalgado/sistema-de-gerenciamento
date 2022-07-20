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

export default {
	findByStatus,
	findByCompanyAndState
}