import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	let state = await prisma.state.findFirst();
	if (!state) {
		await prisma.state.createMany({
			data: [
				{ name: "RJ" },
				{ name: "SP" },
				{ name: "MG" },
				{ name: "AM" }

			]
		})
	}

	let status = await prisma.status.findFirst();
	if (!status) {
		await prisma.status.createMany({
			data: [
				{ name: "ativo" },
				{ name: "inativo" }
			]
		})
	}

	let company = await prisma.company.findFirst();
	if (!company) {
		await prisma.company.createMany({
			data: [
				{ name: "Empresa-A", cnpj: "00000000001", stateId: 1 },
				{ name: "Empresa-B", cnpj: "00000000002", stateId: 2 }

			]
		})
	}

	let process = await prisma.process.findFirst();
	if (!process) {
		await prisma.process.createMany({
			data: [
				{ statusId: 1, number: "00001CIVELRJ", stateId: 1, value: 200000, date: "2007-10-10T00:00:00.000Z", companyId: 1 },
				{ statusId: 1, number: "00001CIVELSP", stateId: 2, value: 100000, date: "2007-10-20T00:00:00.000Z", companyId: 1 },
				{ statusId: 2, number: "00003TRABMG", stateId: 3, value: 10000, date: "2007-10-30T00:00:00.000Z", companyId: 1 },
				{ statusId: 2, number: "00004CIVELRJ", stateId: 1, value: 20000, date: "2007-11-10T00:00:00.000Z", companyId: 1 },
				{ statusId: 1, number: "00005CIVELSP", stateId: 2, value: 35000, date: "2007-11-15T00:00:00.000Z", companyId: 1 },

				{ statusId: 1, number: "00006CIVELRJ", stateId: 1, value: 20000, date: "2007-05-01T00:00:00.000Z", companyId: 2 },
				{ statusId: 1, number: "00007CIVELRJ", stateId: 1, value: 700000, date: "2007-06-02T00:00:00.000Z", companyId: 2 },
				{ statusId: 2, number: "00008CIVELSP", stateId: 2, value: 500, date: "2007-07-03T00:00:00.000Z", companyId: 2 },
				{ statusId: 1, number: "00009CIVELSP", stateId: 2, value: 32000, date: "2007-08-04T00:00:00.000Z", companyId: 2 },
				{ statusId: 2, number: "00010TRABAM", stateId: 4, value: 1000, date: "2007-09-05T00:00:00.000Z", companyId: 2 },
			]
		})
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect();
	})